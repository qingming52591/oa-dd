import {store} from "../../store";
import moment from 'moment'
import {
    Col,
    Row,
    Button,
    Form,
    Input,
    message,
    Modal,
    Table,
    Popconfirm,
    Tag,
    DatePicker,
    Select,
    Space,
    Popover
} from "antd";
import * as event from "../../event";
import React from 'react'
import * as g from "../../g";
import * as util from '../../util'


export const SettingUser = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    const [pwdForm] = Form.useForm()
    React.useEffect(() => {
        (async () => {
            await Promise.all([
                event.menu.getMenuGroup(),
                event.user.getUser()
            ])
        })()
    }, [])
    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            ...util.getColSearchLocal('用户名', 'name')
        }, {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
            render: (text, record) => {
                return g.user_role_desc[record.role]
            }
        }, {
            title: '菜单组',
            dataIndex: 'group_list',
            key: 'group_list',
            render: (text, record) => {
                if (record.role === g.user_role.normal) {
                    return state.setting.menu_group.menu_group.filter((item) => record.group_list.indexOf(item._id) !== -1).map(item => {
                        return <Tag>{item.name}</Tag>
                    })
                } else {
                    return <Tag>全部</Tag>
                }

            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                if (record.role === g.user_role.normal) {
                    return (
                        <>
                            <Space>
                                <Popconfirm title="确认删除吗?"
                                            cancelText={"取消"} okText={'确定'}
                                            onCancel={(e) => e.stopPropagation()}
                                            onConfirm={async (e) => {
                                                e.stopPropagation()
                                                await event.user.deleteUser(record._id)
                                            }}>
                                    <Button danger onClick={async (e) => {
                                        e.stopPropagation()
                                        if (await event.user.deleteUser(record._id)) {
                                            message.success('成功')
                                        } else {
                                            message.error('失败')
                                        }
                                    }}>删除</Button>
                                </Popconfirm>
                                <Popover
                                    content={() => {
                                        return <Form form={pwdForm}>
                                            <Form.Item name={"pwd"}>
                                                <Input type={'password'} onClick={(e) => e.stopPropagation()}
                                                       addonAfter={<Button onClick={async (e) => {
                                                           e.stopPropagation()
                                                           if (await event.user.password({...pwdForm.getFieldsValue(), ...{uid: record._id}})) {
                                                               message.success('修改成功')
                                                           } else {
                                                               message.error('修改失败')
                                                           }
                                                           pwdForm.resetFields()
                                                       }}>修改</Button>}/>
                                            </Form.Item>
                                        </Form>
                                    }}
                                >
                                    <Button onClick={(e) => e.stopPropagation()}>修改密码</Button>

                                </Popover>
                            </Space>
                        </>
                    )
                } else {
                    return <Button danger disabled>删除</Button>
                }

            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <EditSettingUser show={showModal} setShow={setShowModal} initData={modalInit}
                                     setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setShowModal(true)
                    }}>创建用户</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.user.user}
                size={'small'}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            if (record.role === g.user_role.normal) {
                                setModalInit({
                                    ...{...record, ...{birth: moment(record.birth)}}
                                })
                                setShowModal(true)
                            } else {
                                message.info('该用户不允许修改！')
                            }
                        }
                    }
                }}
            />
        </>
    )
}

const EditSettingUser = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal key={Math.random()}
                   title={'编辑'}
                   visible={props.show}
                   okText={'保存'} cancelText={'取消'}
                   onCancel={(e) => {
                       props.setShow(false)
                       form.resetFields()
                   }}
                   onOk={() => {
                       form.validateFields()
                           .then(async (values) => {
                               values = {...values, ...{birth: values.birth.valueOf()}}
                               if (!await event.user.saveUser(values)) {
                                   message.error('保存失败')
                                   return
                               } else {
                                   message.success('保存成功')
                                   props.setShow(false)
                                   form.resetFields()
                               }
                           })
                   }}
            >
                <Form key={Math.random()} form={form}>
                    <Form.Item label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'用户名'} name={'username'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item label={'生日'} name={'birth'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item label={'办公邮件'} name={'email'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input type={'email'}/>
                    </Form.Item>
                    <Form.Item label={'个人邮箱'} name={'personal_email'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input type={'email'}/>
                    </Form.Item>
                    <Form.Item label={'个人手机号码'} name={'mobile'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input type={'tel'}/>
                    </Form.Item>
                    <Form.Item label={'住址'} name={'address'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'紧急联系人'} name={'urgent_name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'紧急联系人手机'} name={'urgent_mobile'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input type={'tel'}/>
                    </Form.Item>
                    <Form.Item noStyle shouldUpdate>
                        {
                            (ins) => {
                                return (
                                    <Form.Item label={'菜单组'} name={'group_list'} rules={[
                                        {
                                            required: true,
                                            message: 'is required!',
                                        }
                                    ]}>
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            placeholder="选择成员"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            {state.setting.menu_group.menu_group.map((item) => <Select.Option
                                                key={item._id}
                                                value={item._id}>{item.name}</Select.Option>)}
                                        </Select>
                                    </Form.Item>
                                )
                            }
                        }
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

import React from 'react'
import {store} from "../../store"
import * as event from '../../event'
import * as comp from '../content'
import * as g from '../../g'
import {
    Space,
    Button,
    Col,
    Row,
    Table,
    Modal,
    Form,
    Input,
    message,
    Radio,
    Select,
    InputNumber,
    Popconfirm, Tag
} from "antd";
import * as util from '../../util'


export const UserGroup = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    let menus = {}
    state.setting.menu.menu.map(item => {
        menus[item._id] = item
        return item
    })
    React.useEffect(() => {
        const getMenu = async () => {
            await Promise.all([
                event.menu.getMenuGroup(),
                event.menu.getMenu()
            ])
        }
        getMenu()
    }, [])

    const columns = [
        {
            title: '用户组名称',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            ...util.getColSearchLocal('名称', 'name')
        }, {
            title: '菜单',
            dataIndex: 'member',
            key: 'member',
            render: (text, record) => {
                if (record.type === g.menu_group_type.menu) {
                    return state.setting.menu.menu.filter((item) => record.member.indexOf(item._id) !== -1).map(item => {
                        return item.name
                    }).join(" | ")
                } else if (record.type === g.menu_group_type.menu_group) {
                    return state.setting.menu_group.menu_group.filter((item) => record.member.indexOf(item._id) !== -1).map(item => {
                        return item.name
                    }).join(" | ")
                }

            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <Popconfirm title="确认删除吗?"
                                cancelText={"取消"} okText={'确定'}
                                onCancel={(e) => e.stopPropagation()}
                                onConfirm={async (e) => {
                                    e.stopPropagation()
                                    await event.menu.deleteMenuGroup(record._id)
                                }}>
                        <Button danger onClick={(e) => e.stopPropagation()}>删除</Button>
                    </Popconfirm>
                )
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <EditUserGroup show={showModal} setShow={setShowModal} initData={modalInit}
                                   setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: '',
                            name: '',
                            type: g.menu_group_type.menu,
                            member: []
                        })
                        setShowModal(true)
                    }}>创建用户组</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.menu_group.menu_group}
                size={'small'}
                scroll={{y: 750}}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            setModalInit({
                                _id: record._id,
                                name: record.name,
                                type: record.type,
                                member: record.member
                            })
                            setShowModal(true)
                        }
                    }
                }}
            />
        </>
    )
}


const EditUserGroup = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal
                title={'编辑用户组'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    form.resetFields()
                }}
                onOk={() => {
                    form.validateFields()
                        .then(async (values) => {
                            if (!await event.menu.createMenuGroup(values)) {
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
                <Form form={form}>
                    <Form.Item label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'名称'} name={'name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"类型"} name={'type'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Radio.Group onChange={(e) => {
                            let now_member = form.getFieldValue('type') === props.initData.type ? props.initData.member : []
                            form.setFieldsValue({member: now_member})
                        }}>
                            <Radio.Button value={g.menu_group_type.menu}>菜单组</Radio.Button>
                            <Radio.Button value={g.menu_group_type.menu_group}>复合组</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    {/*菜单组 or 复合组*/}
                    <Form.Item noStyle shouldUpdate>
                        {
                            (ins) => {
                                let menu_group_type = ins.getFieldValue('type')
                                let member = []
                                if (menu_group_type === g.menu_group_type.menu) {
                                    member = state.setting.menu.menu
                                } else if (menu_group_type === g.menu_group_type.menu_group) {
                                    member = state.setting.menu_group.menu_group
                                }
                                return (
                                    <Form.Item label={"成员"} name={'member'}
                                               rules={[{required: true, message: 'is required!'}]}>
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            placeholder="选择成员"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            {member.filter(item => item.type === g.menu.MENU_ITEM).map((item) =>
                                                <Select.Option key={item._id}
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

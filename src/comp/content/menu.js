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
    Popconfirm
} from "antd";
import * as util from '../../util'

export const Menu = (props) => {
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
            await event.menu.getMenu()
        }
        getMenu()
    }, [])

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            ...util.getColSearchLocal('名称', 'name')
        }, {
            title: '英文名',
            dataIndex: 'english_name',
            key: 'english_name',
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            render: (text, record) => {
                return g.menu_desc[record.type]
            }
        }, {
            title: '父菜单',
            dataIndex: 'parent_name',
            key: 'parent_name',
            render: (text, record) => {
                if (record.parent_id) {
                    return menus[record.parent_id].name
                }
                return '根'

            }
        }, {
            title: '路径',
            dataIndex: 'path',
            key: 'path'
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                if (record.state === g.menu_state.fixed) {
                    return <Button danger disabled>删除</Button>
                } else {
                    return (
                        <Popconfirm title="会同时清理相关联菜单组，确认删除吗?"
                                    cancelText={"取消"} okText={'确定'}
                                    onCancel={(e) => e.stopPropagation()}
                                    onConfirm={async (e) => {
                                        e.stopPropagation()
                                        await event.menu.deleteMenu(record._id)
                                    }}>
                            <Button danger onClick={(e) => e.stopPropagation()}>删除</Button>
                        </Popconfirm>)
                }

            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <EditMenu show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: '',
                            type: g.menu.MENU,
                            jump: g.menu_jump.app,
                            name: '',
                            english_name: '',
                            app_id: '',
                            comp: '',
                            parent_id: '',
                            icon: '',
                            path: '',
                            sort: 0,
                        })
                        setShowModal(true)
                    }}>创建菜单</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.menu.menu}
                size={'small'}
                scroll={{y: 750}}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            if (record.state === g.menu_state.fixed) {
                                message.info('系统默认菜单不可修改')
                                return
                            }
                            setModalInit({
                                _id: record._id,
                                type: record.type,
                                jump: record.jump,
                                name: record.name,
                                english_name: record.english_name,
                                path: record.path,
                                app_id: record.app_id,
                                comp: record.comp,
                                sort: record.type,
                                icon: record.icon,
                                parent_id: record.parent_id,
                            })
                            setShowModal(true)
                        }
                    }
                }}
            />
        </>
    )
}

const EditMenu = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    React.useEffect(() => {
        const temp = async () => {
            await event.app.getApp()
            await event.menu.getMenu()
        }
        temp()
    }, [])

    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal
                title={'编辑菜单'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    form.resetFields()
                }}
                onOk={() => {
                    form.validateFields()
                        .then(async (values) => {
                            if (!await event.menu.createMenu(values)) {
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
                    <Form.Item label={"类型"} name={'type'}>
                        <Radio.Group>
                            <Radio.Button value={g.menu.MENU}>菜单</Radio.Button>
                            <Radio.Button value={g.menu.MENU_ITEM}>菜单项</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label={"跳转"} name={'jump'} initialValue={props.initData.jump}>
                        <Radio.Group>
                            <Radio.Button value={g.menu_jump.comp}>组件</Radio.Button>
                            <Radio.Button value={g.menu_jump.app}>APP</Radio.Button>
                            <Radio.Button value={g.menu_jump.outer}>外链</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label={'名称'} name={'name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'英文名'} name={'english_name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'路径'} name={'path'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'排序'} name={'sort'}>
                        <InputNumber min={0}/>
                    </Form.Item>

                    <Form.Item label={'父菜单'} name={'parent_id'}>
                        <Select allowClear>
                            {
                                state.setting.menu.menu.filter(item => item.type === g.menu.MENU).map((item) =>
                                    <Select.Option value={item._id}> {item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>

                    {/*组件*/}
                    <Form.Item noStyle shouldUpdate>
                        {(ins) => {
                            if (ins.getFieldValue('jump') === g.menu_jump.comp) {
                                return (
                                    <Form.Item label={'组件'} name={'comp'}>
                                        <Select allowClear>
                                            {Object.keys(comp.default).map((item) => {
                                                return <Select.Option
                                                    value={item}>{item}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                )
                            }
                            return null
                        }}
                    </Form.Item>
                    {/*App*/}
                    <Form.Item noStyle shouldUpdate>
                        {(ins) => {
                            if (ins.getFieldValue('jump') === g.menu_jump.app) {
                                return (
                                    <Form.Item label={'App'} name={'app_id'}>
                                        <Select allowClear>
                                            {state.setting.app.app.map((item) => {
                                                return <Select.Option
                                                    value={item._id}>{item.name}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                )
                            }
                            return null
                        }}
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}

export const MenuGroup = (props) => {
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
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            ...util.getColSearchLocal('名称', 'name')
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            render: (text, record) => {
                return g.menu_group_type_desc[record.type]
            }
        }, {
            title: '菜单或菜单组',
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
                    <EditMenuGroup show={showModal} setShow={setShowModal} initData={modalInit}
                                   setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: '',
                            name: '',
                            type: g.menu_group_type.menu,
                            member: []
                        })
                        setShowModal(true)
                    }}>创建菜单组</Button>
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


const EditMenuGroup = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal
                title={'编辑菜单组'}
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

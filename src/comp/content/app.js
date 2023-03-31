import {store} from "../../store";
import {Col, Row, Button, Form, Input, message, Modal, Table, Popconfirm} from "antd";
import * as event from "../../event";
import React from 'react'
import * as g from "../../g";
import * as util from '../../util'


export const App = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    React.useEffect(() => {

        const getApp = async () => {
            await event.app.getApp()
        }
        getApp()
    }, [])
    const columns = [
        {
            title: 'App名称',
            dataIndex: 'name',
            key: 'name',
            ...util.getColSearchLocal('App名称', 'name')
        }, {
            title: '入口地址',
            dataIndex: 'enter',
            key: 'enter',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                if (record.state === g.menu_state.fixed) {
                    return <Button danger disabled>删除</Button>
                } else {
                    return (
                        <Popconfirm title="会同时清理相关联菜单、菜单组和用户权限，确认删除吗?"
                                    cancelText={"取消"} okText={'确定'}
                                    onCancel={(e) => e.stopPropagation()}
                                    onConfirm={async (e) => {
                                        e.stopPropagation()
                                        await event.app.deleteApp(record._id)
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
                    <EditApp show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: '',
                            name: '',
                            enter: ''
                        })
                        setShowModal(true)
                    }}>创建APP</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.app.app}
                size={'small'}
                scroll={{y: 750}}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            setModalInit({
                                _id: record._id,
                                name: record.name,
                                enter: record.enter
                            })
                            setShowModal(true)
                        }
                    }
                }}
            />
        </>
    )
}

const EditApp = (props) => {
    const [form] = Form.useForm()
    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal key={Math.random()}
                   title={'编辑App'}
                   visible={props.show}
                   okText={'保存'} cancelText={'取消'}
                   onCancel={(e) => {
                       props.setShow(false)
                       form.resetFields()
                   }}
                   onOk={() => {
                       form.validateFields()
                           .then(async (values) => {
                               if (!await event.app.saveApp(values)) {
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
                    <Form.Item label={'名称'} name={'name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'入口'} name={'enter'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

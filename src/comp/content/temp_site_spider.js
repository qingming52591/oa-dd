import {
    Col,
    Row,
    Button,
    Form,
    Input,
    DatePicker,
    Modal,
    Table,
    Space,
    Avatar,
    Select,
    Checkbox,
    InputNumber,
    Upload,
    Collapse,
    Divider,
    Tabs, message, Tag, Popconfirm, Popover, Radio
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {InboxOutlined, PlusOutlined} from '@ant-design/icons'
import * as util from '../../util'
import * as g from '../../g'
import test_img from '../../imgs/7777.png'
import {store} from "../../store";
import {re} from '../../util/re'
import * as comp from "./index";


const EditSiteSpider = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal
                title={'编辑站点'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    form.resetFields()
                }}
                onOk={() => {
                    form.validateFields()
                        .then(async (values) => {
                            if (!await event.siteSpider.saveSiteSpider(values, props.pagination)) {
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
                <Form {...{labelCol: {span: 6}, wrapperCol: {span: 20,}}} form={form}>
                    <Form.Item label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"站点名称"} name={'name'}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"url"} name={'enter'}>
                        <Input type={'url'}/>
                    </Form.Item>
                    <Form.Item label={"国家地区"} name={'state'}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"语言"} name={'lang'}>
                        <Select allowClear>
                            <Select.Option value={"zh"}> {"中文"}</Select.Option>
                            <Select.Option value={"en"}> {"英文"}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"采集数据类型"} name={'data_type'}>
                        <Select allowClear>
                            <Select.Option value={"html"}> {"html"}</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"来源类型"} name={'source_type'}>
                        <Select allowClear>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"适用地区"} name={'apply_zone'}>
                        <Select allowClear>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"不适用地区"} name={'unserviced_zone'}>
                        <Select allowClear>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"话题类型"} name={'topic_type'}>
                        <Select allowClear>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"权重"} name={'weight'}>
                        <InputNumber/>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}

export const SiteSpider = (props) => {
    const state = store.useContext();
    const [table, setTable] = React.useState({
        pagination: {current: 1, pageSize: 60, total: 0},
        loading: false
    })
    React.useEffect(() => {
        (async () => {
            let pagination = await event.siteSpider.getSiteSpider(table.pagination)
            if (pagination) {
                setTable({...table, ...{pagination: pagination}})
            }
        })()
    }, [])


    const columns = [
        {
            title: '站点名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'url',
            dataIndex: 'enter',
            key: 'enter'
        }, {
            title: '国家地区',
            dataIndex: 'state',
            key: 'state'
        }, {
            title: '语言',
            dataIndex: 'lang',
            key: 'lang',
        }, {
            title: '采集数据类型',
            dataIndex: 'data_type',
            key: 'data_type',
        }, {
            title: '来源类型',
            dataIndex: 'source_type',
            key: 'source_type',
        }, {
            title: '适用地区',
            dataIndex: 'apply_zone',
            key: 'apply_zone',
        }, {
            title: '不适用地区',
            dataIndex: 'unserviced_zone',
            key: 'unserviced_zone',
        }, {
            title: '话题类型',
            dataIndex: 'topic_type',
            key: 'topic_type',
        }, {
            title: '权重',
            dataIndex: 'weight',
            key: 'weight',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="link" disabled={record.result ? true : false}
                                onClick={async (e) => {
                                    e.stopPropagation()
                                    let result = await event.siteSpider.emit({
                                        "_id": record._id,
                                        "enter": record.enter,
                                        "lang": record.lang,
                                        "weight": record.weight
                                    }, table.pagination)
                                    if (!result) {
                                        message.error('操作失败')
                                    }
                                    message.info('操作成功')
                                }}>抓取</Button>
                    </>
                )
            }
        }
    ]
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    return (
        <>
            <Row justify={'end'}>
                <EditSiteSpider show={showModal} setShow={setShowModal} initData={modalInit}
                                setInitData={setModalInit} pagination={table.pagination}/>
                <Button type={'primary'} onClick={async () => {
                    setModalInit({
                        _id: "",
                        name: '',
                        enter: '',
                        state: '',
                        lang: '',
                        data_type: '',
                        source_type: '',
                        apply_zone: [],
                        unserviced_zone: [],
                        topic_type: [],
                        weight: 0
                    })
                    setShowModal(true)
                }}>创建站点</Button>
            </Row>
            <Table
                columns={columns}
                dataSource={state.spider.site.site}
                pagination={table.pagination}
                onChange={async (param) => {
                    console.log(param)
                    let pagination = await event.siteSpider.getSiteSpider(param)
                    if (pagination) {
                        setTable({...table, ...{pagination: pagination}})
                    }
                }}
                size={'small'}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            setModalInit({
                                _id: record._id,
                                name: record.name,
                                enter: record.enter,
                                state: record.state,
                                lang: record.lang,
                                data_type: record.data_type,
                                source_type: record.source_type,
                                apply_zone: record.apply_zone,
                                unserviced_zone: record.unserviced_zone,
                                topic_type: record.topic_type,
                                weight: record.weight
                            })
                            setShowModal(true)
                        }
                    }
                }}
            />
        </>
    )
}

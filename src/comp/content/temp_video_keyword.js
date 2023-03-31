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
    InputNumber
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";


export const VideoKeyword = (props) => {
    const [showModal, setShowModal] = React.useState(false)
    const columns = [
        {
            title: '关键词',
            dataIndex: 'keyword',
            key: 'keyword',
        }, {
            title: '分类',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '抓取条件',
            dataIndex: 'crawl_condition',
            key: 'crawl_condition',
        }, {
            title: '要求时长',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '清晰度',
            dataIndex: 'sharpness',
            key: 'sharpness',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (<>
                    <Space>
                        <Button type="link" onClick={e => {
                            setShowModal(true)
                        }}>编辑</Button>
                    </Space>
                </>)
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <EditVideoKeyword show={showModal} setShow={setShowModal}></EditVideoKeyword>
                <Button type={'primary'} onClick={e => {
                    setShowModal(true)
                }}>添加</Button>
            </Row>
            <Table
                columns={columns}
                dataSource={[
                    {
                        keyword: "Telecommunications",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Technology",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Cheap Travel places",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Travel guide",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Travel After Coronavirus",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Best Travel places",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "holiday",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "tourist",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "travel light",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "resort",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                ]}
                size={'small'}
                scroll={{y: 750}}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                        }
                    }
                }}
            />
        </>
    )
}


const EditVideoKeyword = (props) => {
    const [form] = Form.useForm()
    return (
        <>
            <Modal
                title={'编辑'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    form.resetFields()
                }}
                onOk={() => {
                    props.setShow(false)
                }}
            >
                <Form form={form}>
                    <Form.Item label={"关键词"}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"分类"}>
                        <Select>
                            <Select.Option value={"Travel"}>Travel</Select.Option>
                            <Select.Option value={"Tech"}>Tech</Select.Option>
                            <Select.Option value={"Sports"}>Sports</Select.Option>
                            <Select.Option value={"Music"}>Music</Select.Option>
                            <Select.Option value={"How to"}>How to</Select.Option>
                            <Select.Option value={"Games"}>Games</Select.Option>
                            <Select.Option value={"Movie"}>Movie</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"时长"}>
                        <Select>
                            <Select.Option value={"≤5min"}>≤5min</Select.Option>
                            <Select.Option value={"≤10min"}>≤10min</Select.Option>
                            <Select.Option value={"≤20min"}>≤20min</Select.Option>
                            <Select.Option value={"≤30min"}>≤30min</Select.Option>
                            <Select.Option value={"≤60min"}>≤60min</Select.Option>
                            <Select.Option value={"≤120min"}>≤120min</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"清晰度"}>
                        <Checkbox.Group options={[
                            {label: '1080P', value: '1080P'},
                            {label: '720P', value: '720P'},
                            {label: '480P', value: '480P'},
                            {label: '360P', value: '360P'},
                            {label: '240P', value: '240P'},
                            {label: '144P', value: '144P'},
                        ]}></Checkbox.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
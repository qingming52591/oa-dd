import {Col, Row, Button, Form, Input, message, Modal, Table, Tag, Upload} from "antd";
import * as event from "../../event";
import React from 'react'
import {PlusOutlined, LoadingOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";


export const TopicManager = (props) => {
    const [showModal, setShowModal] = React.useState(false)
    const columns = [
        {
            title: 'Topic名称',
            dataIndex: 'topic_name',
            key: 'topic_name',
        }, {
            title: '图片数量',
            dataIndex: 'img_num',
            key: 'img_num',
        }, {
            title: '标签/关键词',
            dataIndex: 'keyword',
            key: 'keyword',
        }, {
            title: '召回数量',
            dataIndex: 'recall_num',
            key: 'recall_num',
        }, {
            title: 'Topic类型',
            dataIndex: 'topic_type',
            key: 'topic_type',
        }, {
            title: '更新时间',
            dataIndex: 'update_time',
            key: 'update_time',
            render: (text) => {
                let d = new Date(parseInt(text))
                let year = d.getFullYear()
                let month = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMinutes()
                let day = d.getDay() < 10 ? "0" + d.getDay() : d.getDay()
                let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
                let minu = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
                let second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
                return year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" + second
            }
        }, {
            title: '更新人',
            dataIndex: 'operator',
            key: 'operator',
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <EditTopicManager show={showModal} setShow={setShowModal}/>
                    <Button type={'primary'} onClick={e => {
                        setShowModal(true)
                    }}>创建主题</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={[
                    {
                        topic_name: "NFL",
                        img_num: 1,
                        keyword: "NFL New England Patriots Pittsburgh Steelers Houston Texans Kansas City Chiefs Tom Brady Baltimore Ravens Indianapolis Colts Las Vegas Raiders Tennessee Titans Buffalo Bills",
                        recall_num: 501,
                        topic_type: "1",
                        update_time: "1605845947677",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "Neha Kakkar",
                        img_num: 1,
                        keyword: "Neha Kakkar",
                        recall_num: 84,
                        topic_type: "1",
                        update_time: "1605782202486",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "PlayStation 5",
                        img_num: 1,
                        keyword: "PS5 PlayStation 5",
                        recall_num: 501,
                        topic_type: "1",
                        update_time: "1605781304568",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "Pfizer COVID vaccine",
                        img_num: 1,
                        keyword: "Pfizer vaccine Pfizer Covid",
                        recall_num: 501,
                        topic_type: "1",
                        update_time: "1605755975749",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "APEC summit 2020",
                        img_num: 1,
                        keyword: "APEC",
                        recall_num: 94,
                        topic_type: "1",
                        update_time: "1605753340500",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "Justice for Gulnaz",
                        img_num: 1,
                        keyword: "India girl burnt Bihar girl burnt India teenager burnt BIhar teenager burnt Justice for Gulnaz JusticeForGulnaz JusticeforGulnaz Gulnaz Khatoon",
                        recall_num: 6,
                        topic_type: "1",
                        update_time: "1605753080936",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "G20 Riyadh summit",
                        img_num: 1,
                        keyword: "G20",
                        recall_num: 203,
                        topic_type: "1",
                        update_time: "1605689576273",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "Vincent Reffet",
                        img_num: 1,
                        keyword: "Vincent Reffet Jetman Dubai",
                        recall_num: 9,
                        topic_type: "1",
                        update_time: "1605672838552",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "Karachi Kings",
                        img_num: 1,
                        keyword: "Karachi Kings Imad Wasim Babar Azam",
                        recall_num: 113,
                        topic_type: "1",
                        update_time: "1605667131237",
                        operator: "yangmengshu"
                    },
                    {
                        topic_name: "Oman National Day",
                        img_num: 1,
                        keyword: "National Day Oman Oman National Day Sultan Haitham National Day",
                        recall_num: 42,
                        topic_type: "1",
                        update_time: "1605622895433",
                        operator: "yangmengshu"
                    },
                ]}
                size={'small'}
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


const EditTopicManager = (props) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = React.useState(false)
    const [imageUrl, setImageUrl] = React.useState()
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );
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
                    <Form.Item label={"Topic名称"}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"召回关键词"}>
                        <Tag>
                            <PlusOutlined/> New Tag
                        </Tag>
                    </Form.Item>
                    <Form.Item label={"图片"}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                        </Upload>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}
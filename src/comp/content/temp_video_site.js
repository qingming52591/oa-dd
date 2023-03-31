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


export const VideoSide = (props) => {
    const [showModal, setShowModal] = React.useState(false)
    const columns = [
        {
            title: '头像',
            dataIndex: 'icon',
            key: 'icon',
            render: text => <Avatar
                size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                src={text}/>
        }, {
            title: '作者名',
            dataIndex: 'auth_name',
            key: 'auth_name',
        }, {
            title: 'url',
            dataIndex: 'url',
            key: 'url',
        }, {
            title: '语言',
            dataIndex: 'lang',
            key: 'lang',
        }, {
            title: '分类',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '时长',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '清晰度',
            dataIndex: 'sharpness',
            key: 'sharpness',
        }, {
            title: '上传时间',
            dataIndex: 'upload_time',
            key: 'upload_time',
        }, {
            title: '大小',
            dataIndex: 'size',
            key: 'size',
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
                <EditVideoSide show={showModal} setShow={setShowModal}></EditVideoSide>
                <Button type={'primary'} onClick={e => {
                    setShowModal(true)
                }}>添加</Button>
            </Row>
            <Table
                columns={columns}
                dataSource={[
                    {
                        icon: "https://imagecache1.daypop.ai/6ea519c7f04f0f4001161577101cd497",
                        auth_name: "越哥说电影",
                        url: "https://www.youtube.com/channel/UChgCVolsF6L7DWmOpWKSkMA/videos",
                        lang: "Chinese",
                        type: "Movie",
                        time: "≤60min",
                        sharpness: "720P 480P",
                        upload_time: "2017年10月15日",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/d11bd5da5517e826e03f34b482a2c834",
                        auth_name: "Movie Fanatic",
                        url: "https://www.youtube.com/channel/UCeDsVGStqlfeeO5-jpKd52g/videos",
                        lang: "None",
                        type: "movie",
                        time: "≤60min",
                        sharpness: "720P 480P",
                        upload_time: "2019年3月12日",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/9f3fe8e1f6c5b9e461acdeab55fad8d4",
                        auth_name: "Movie Spoiler Alerts",
                        url: "https://www.youtube.com/c/MovieSpoilerAlertsChannel/videos",
                        lang: "None",
                        type: "movie",
                        time: "≤60min",
                        sharpness: "720P 480P",
                        upload_time: "2015年1月7日",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/382ecde9fe331f874b32afdc7917fffc",
                        auth_name: "Movies in Minutes",
                        url: "https://www.youtube.com/c/MoviesinMinutes/videos",
                        lang: "None",
                        type: "movie",
                        time: "≤30min",
                        sharpness: "720P 480P",
                        upload_time: "2016年3月16日",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/47c2cd90cfe17531a8f144e72290b2f3",
                        auth_name: "Mohamed Taher محمد طاهر",
                        url: "https://www.youtube.com/c/MohamedTaherreviews/videos",
                        lang: "None",
                        type: "movie",
                        time: "≤30min",
                        sharpness: "720P 480P",
                        upload_time: "2009年8月12日",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/dfc74c5ac69b0697e911793297df6509",
                        auth_name: "ملخص حمزة HMZ's Recap",
                        url: "https://www.youtube.com/channel/UCPOvzuj7JWW2aKdsflzhNZw/videos",
                        lang: "Arabic",
                        type: "Movie",
                        time: "≤30min",
                        sharpness: "720P 480P",
                        upload_time: "2018年2月1日",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/9b6c905011d67dd6df94a463428bd7d8.jpg",
                        auth_name: "123 GO! SCHOOL Arabic",
                        url: "https://www.youtube.com/channel/UCYQ-pwbTVi466WviyADqE_A/videos",
                        lang: "None",
                        type: "Comedy ",
                        time: "≤30min",
                        sharpness: "480P",
                        upload_time: "2020年2月26日",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/feef2c22957e04b5cc3d8c13e9cb2e5a.jpg",
                        auth_name: "Ahlam | أحلام",
                        url: "https://www.youtube.com/c/Ahlam/featured",
                        lang: "None",
                        type: "Music",
                        time: "≤30min",
                        sharpness: "480P",
                        upload_time: "0",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/a46e2f6efa5de0d375eb083f6900e5e8.jpg",
                        auth_name: "Ahmed Bukhatir",
                        url: "https://www.youtube.com/user/ahmedbukhatir/featured",
                        lang: "None",
                        type: "Music",
                        time: "≤30min",
                        sharpness: "480P",
                        upload_time: "0",
                        size: "未知"
                    },
                    {
                        icon: "https://imagecache1.daypop.ai/8d93a002343eb1bb86ac06b3b12c3230.jpg",
                        auth_name: "Etana Production",
                        url: "https://www.youtube.com/c/EtanaProduction/videos",
                        lang: "None",
                        type: "Entertainment",
                        time: "≤30min",
                        sharpness: "480P",
                        upload_time: "2011年2月19日",
                        size: "未知"
                    },

                ]}
                size={'small'}
                bordered
            />
        </>
    )
}

const EditVideoSide = (props) => {
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
                    <Form.Item label={"Url"}>
                        <Input type={'url'}/>
                    </Form.Item>
                    <Form.Item label={"抓取频率"}>
                        <Select>
                            <Select.Option value={"1h"}>1h</Select.Option>
                            <Select.Option value={"6h"}>6h</Select.Option>
                            <Select.Option value={"12h"}>12h</Select.Option>
                            <Select.Option value={"1d"}>1d</Select.Option>
                            <Select.Option value={"2d"}>2d</Select.Option>
                            <Select.Option value={"3d"}>3d</Select.Option>
                            <Select.Option value={"7d"}>7d</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label={"分类"}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"语言"}>
                        <Input/>
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
                    <Form.Item label={"播放次数"}>
                        <InputNumber min={1}/>
                    </Form.Item>
                    <Form.Item label={"上传日期"}>
                        <DatePicker/>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}
import {Col, Row, Button, Form, Input, message, Modal, Table} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";


export const CrawlingTask = (props) => {
    const columns = [
        {
            title: 'Topic',
            dataIndex: 'topic',
            key: 'topic',
        }, {
            title: 'Topic简介',
            dataIndex: 'topic_desc',
            key: 'topic_desc',
        }, {
            title: 'MD5',
            dataIndex: 'md5',
            key: 'md5',
        }, {
            title: '任务特征',
            dataIndex: 'task_feature',
            key: 'task_feature',
        }, {
            title: '试抓取结果',
            dataIndex: 'try_result',
            key: 'try_result',
        }, {
            title: '日常抓取状态',
            dataIndex: 'daily_state',
            key: 'daily_state',
        }, {
            title: '是否执行试抓',
            dataIndex: 'is_try',
            key: 'is_try',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (<>
                    <Link>修改</Link>
                    <Link>删除</Link>
                    <Link>添加</Link>
                </>)
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <Button type={'primary'}>添加话题</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={[
                    {
                        topic: '医疗.医生',
                        topic_desc: '医生数据',
                        md5: '71ed0f399b08fc7804ce79c478bee64e',
                        task_feature: '定时增量更新',
                        try_result: '可执行批量抓取',
                        daily_state: '未开始',
                        is_try: '否'
                    }, {
                        topic: '医疗.医院',
                        topic_desc: '医院数据',
                        md5: '557c0c3f48f542aafd8cf8811690ca32',
                        task_feature: '一次性抓取',
                        try_result: '可执行批量抓取',
                        daily_state: '未开始',
                        is_try: '否'
                    }
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

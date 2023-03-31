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
import * as util from '../../util'
import * as g from '../../g'
import {store} from "../../store";
import {Link} from "react-router-dom";
import * as time from "../../util/time";


export const TakeNotes = (props) => {
    const state = store.useContext();
    const [table, setTable] = React.useState({
        pagination: {current: 1, pageSize: 15, total: 0},
        loading: false
    })
    React.useEffect(() => {
        (async () => {
            let pagination = await event.content.getContent(table.pagination, '', g.content_type.note)
            if (pagination) {
                setTable({...table, ...{pagination: pagination}})
            }
            await event.topic.getTopic({}, true)
        })()
    }, [])
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        }, {
            title: '摘要',
            dataIndex: 'yl_summary',
            key: 'yl_summary',
            render: (text, record) => {
                return record.yl_summary.slice(0, 40)
            }
        }, {
            title: '入库时间',
            dataIndex: 'create_time',
            key: 'create_time',
            render: (text, record) => {
                return time.timeFromMs(text)
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (<>
                    <Space>
                        <Link to={{
                            pathname: '/note/write',
                            state: {_id: record._id, title: record.title, content_html: record.content_html}
                        }}>编辑</Link>
                    </Space>
                </>)
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Button type={'primary'}><Link to={{
                    pathname: '/note/write'
                }}>写笔记</Link>
                </Button>
            </Row>
            <Table
                columns={columns}
                dataSource={state.user.content.contents}
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

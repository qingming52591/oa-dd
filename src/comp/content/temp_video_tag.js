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
    Divider,
    message,
    Tag, Popover, Radio
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {InboxOutlined} from '@ant-design/icons'
import * as util from '../../util'
import {store} from "../../store"
import * as g from '../../g'
import config from "../../conf";

export const VideoTag = (props) => {
    const state = store.useContext()
    const [showResult, setShowResult] = React.useState(false)
    const [edit, setEdit] = React.useState({})
    const [editTitle, setEditTitle] = React.useState(false)
    const [editKeyword, setEditKeyword] = React.useState(null)
    const [addKeyword, setAddKeyword] = React.useState(false)
    const [selectTopic, setSelectTopic] = React.useState([])
    const [table, setTable] = React.useState({
        pagination: {current: 1, pageSize: 15, total: 0},
        loading: false
    })
    React.useEffect(() => {
        (async () => {
            await event.topic.getTopic({}, true)
            await event.video.getVideo()
        })()
    }, [])
    const columns = [
        {
            title: '视频名称',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                return <>
                    {record.name}
                    <Button type="link" onClick={() => {
                        setEdit({...edit, ...record})
                        setShowResult(true)
                    }}>预览</Button>
                </>
            }
        }, {
            title: '关键词',
            dataIndex: 'keywords',
            key: 'keywords',
            render: (text, record) => {
                return <>
                    {record.keywords.map(item => <Tag>{item}</Tag>)}
                    <Button type="link" onClick={() => {
                        setEdit({...edit, ...record})
                        setShowResult(true)
                    }}>＋</Button>
                </>
            }
        }, {
            title: '主题',
            dataIndex: 'topic',
            key: 'topic',
            render: (text, record) => {
                let topics = record.topic ? record.topic : []
                return <>
                    {topics.map(item => {
                        let topic = state.topic.topic.topic.filter(temp => item === temp._id)
                        topic = topic[0]
                        if (!topic) {
                            return null
                        }
                        return <Tag>{topic.name}</Tag>
                    })}
                    <Button type="link" onClick={() => {
                        setEdit({...edit, ...record})
                        setShowResult(true)
                    }}>＋</Button>
                </>
            }
        }, {
            title: '处理状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => {
                if (record.status === g.video_status.success) {
                    return g.video_status_desc[g.video_status.success]
                } else if (record.status === g.video_status.waiting) {
                    return g.video_status_desc[g.video_status.waiting]
                } else {
                    return g.video_status_desc[g.video_status.fail]
                }
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (<>
                    <Space>
                        <Button type="link" onClick={() => {
                            setEdit({...edit, ...record})
                            setShowResult(true)
                        }}>修改</Button>
                    </Space>
                </>)
            }
        }
    ]
    return (
        <>
            <Modal title={'查看结果'} visible={showResult}
                   onOk={() => setShowResult(false)}
                   onCancel={() => setShowResult(false)}
                   footer={null}
                   width={'75%'}
            >
                <Row>
                    <Col span={13}>
                        <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                               id={edit.id} controls
                               src={`${config.VIDEO_BASE}/video/${edit.origin}`}/>
                    </Col>
                    <Col span={11} style={{paddingLeft: 10}}>
                        <Divider orientation={'left'}>标题</Divider>
                        <span onDoubleClick={(e) => {
                            setEditTitle(true)
                        }}>
                            {(() => {
                                if (editTitle) {
                                    return <Input
                                        ref={input => input ? input.focus() : null}
                                        value={edit.name}
                                        onChange={(e) => {
                                            setEdit({...edit, ...{name: e.target.value}})
                                        }}
                                        onPressEnter={async (e) => {
                                            if (!await event.video.updateVideo(edit._id, 'name', e.target.value)) {
                                                message.error('修改失败')
                                                return false
                                            }
                                            setEdit({...edit, ...{name: e.target.value}})
                                            setEditTitle(false)
                                        }}
                                        onBlur={async e => {
                                            if (!await event.video.updateVideo(edit._id, 'name', e.target.value)) {
                                                message.error('修改失败')
                                                return false
                                            }
                                            setEdit({...edit, ...{name: e.target.value}})
                                            setEditTitle(false)
                                        }}
                                    ></Input>
                                } else {
                                    return edit.name
                                }
                            })()}
                            </span>

                        <Divider orientation={'left'}>主题</Divider>
                        {edit.topic ? edit.topic.map((item, index) => {
                            let topic = state.topic.topic.topic.filter(temp => item === temp._id)
                            topic = topic[0]
                            return <Tag key={topic._id} closable onClose={async e => {
                                let t = edit.topic.filter((tt, i) => i !== index)
                                if (!await event.video.updateVideo(edit._id, 'topic', t)) {
                                    message.error('修改失败')
                                    return false
                                }
                                setEdit({...edit, ...{topic: t}})
                            }}>{topic.name}</Tag>
                        }) : null}
                        <span>
                        <Select
                            style={{width: "30%"}}
                            mode="multiple"
                            allowClear
                            placeholder="选择主题"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            value={selectTopic}
                            onChange={value => setSelectTopic(value)}
                        >
                            {state.topic.topic.topic.filter(item => {
                                if (edit.topic) {
                                    return edit.topic.indexOf(item._id) === -1
                                } else {
                                    return true
                                }
                            }).map((item) =>
                                <Select.Option
                                    key={item._id}
                                    value={item._id}>{item.name}</Select.Option>
                            )}
                        </Select>
                        <Button onClick={async e => {
                            let topic = []
                            if (edit.topic) {
                                topic = [...edit.topic, ...selectTopic]
                            } else {
                                topic = selectTopic
                            }
                            if (!await event.video.updateVideo(edit._id, 'topic', topic)) {
                                message.error('修改失败')
                                return false
                            }
                            setEdit({...{...edit, ...{topic: topic}}})
                            setSelectTopic([])
                        }}>添加</Button>
                        </span>
                        <Divider orientation={'left'}>关键词</Divider>
                        {(() => {
                            if (edit.keywords) {
                                return edit.keywords.map((item, index) => {
                                    let k = [...edit.keywords]
                                    if (editKeyword === index) {
                                        return <Input value={item} onChange={e => {
                                            k[index] = e.target.value
                                            setEdit({...edit, ...{keywords: k}})
                                        }} onPressEnter={async (e) => {
                                            k[index] = e.target.value
                                            if (!await event.video.updateVideo(edit._id, 'keywords', k)) {
                                                message.error('修改失败')
                                                return false
                                            }
                                            setEdit({...edit, ...{keywords: k}})
                                            setEditKeyword(null)
                                        }}/>
                                    } else {
                                        return <span onDoubleClick={(e) => {
                                            setEditKeyword(index)
                                        }}>
                                            <Tag key={index} closable onClose={async e => {
                                                k = k.filter((temp, i) => i !== index)
                                                if (!await event.video.updateVideo(edit._id, 'keywords', k)) {
                                                    message.error('修改失败')
                                                    return false
                                                }
                                                setEdit({...edit, ...{keywords: k}})
                                            }}>{item}</Tag>
                                        </span>
                                    }
                                })
                            }
                        })()}
                        {addKeyword ? <Input style={{width: "30%"}} onPressEnter={async (e) => {
                            let k = [...edit.keywords]
                            k.push(e.target.value)
                            if (!await event.video.updateVideo(edit._id, 'keywords', k)) {
                                message.error('修改失败')
                                return false
                            }
                            setEdit({...edit, ...{keywords: k}})
                            setAddKeyword(false)
                        }}/> : <Tag onClick={e => setAddKeyword(true)}>＋</Tag>}
                    </Col>
                </Row>
            </Modal>
            <Table
                columns={columns}
                dataSource={state.page.video.video}
                size={'small'}
                pagination={{pageSize: 50}}
                bordered
            />
        </>
    )
}

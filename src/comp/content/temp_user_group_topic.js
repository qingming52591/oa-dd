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

export const UserGroupTopic = (props) => {
    const state = store.useContext()
    const [topicShow, setTopicShow] = React.useState(false)
    const [selectTopic, setSelectTopic] = React.useState([])
    const [userShow, setUserShow] = React.useState(false)
    const [users, setUsers] = React.useState([])
    const [edit, setEdit] = React.useState(null)
    React.useEffect(() => {
        (async () => {
            await event.topic.getTopic({}, true)
            await event.menu.getMenuGroup()
        })()
    }, [])

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '可见主题',
            dataIndex: 'topic',
            key: 'topic',
            render: (text, record) => {
                if (record.topic) {
                    return record.topic.map(item => {
                        let topic = state.topic.topic.topic.filter(temp => temp._id === item)
                        topic = topic[0]
                        return <Tag>{topic.name}</Tag>
                    })
                }
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type={"link"} onClick={(e) => {
                            e.stopPropagation()
                            setEdit(record)
                            setTopicShow(true)
                        }}>主题</Button>
                        <Button type={"link"} onClick={async (e) => {
                            e.stopPropagation()
                            let users = await event.user.getGroupUser(record._id)
                            if (users) {
                                setUsers(users)
                                setUserShow(true)
                            } else {
                                message.error('获取数据失败')
                            }
                        }}>用户</Button>
                    </>
                )
            }
        }
    ]
    return (
        <>
            <Modal title={'查看用户'} visible={userShow}
                   onOk={() => setUserShow(false)}
                   onCancel={() => setUserShow(false)}
                   footer={null}
                   width={'65%'}
            >
                {users.map((item, index) => {
                    return <Tag>{item.username}</Tag>
                })}
            </Modal>
            <Modal title={'查看主题'} visible={topicShow}
                   onOk={() => setTopicShow(false)}
                   onCancel={() => setTopicShow(false)}
                   footer={null}
                   width={'65%'}
            >
                {
                    (() => {
                        let topics = []
                        if (edit && edit.topic) {
                            topics = edit.topic.map((item, index) => {
                                let topic = state.topic.topic.topic.filter(temp => item === temp._id)
                                topic = topic[0]
                                return <Tag key={topic._id} closable onClose={async e => {
                                    let t = edit.topic.filter((tt, i) => i !== index)
                                    if (!await await event.menu.menuGroupUpdate(edit._id, 'topic', t)) {
                                        message.error('修改失败')
                                        return false
                                    }
                                    setEdit({
                                        ...edit, ...{topic: t}
                                    })
                                }}>{topic.name}</Tag>
                            })
                        }
                        return topics
                    })()
                }
                <Select
                    style={{width: '20%'}}
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
                        if (edit && edit.topic) {
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
                    if (!await event.menu.menuGroupUpdate(edit._id, 'topic', topic)) {
                        message.error('修改失败')
                        return false
                    }
                    setEdit({
                        ...edit, ...{topic: topic}
                    })
                    setSelectTopic([])
                }}>添加</Button>
            </Modal>
            <Table
                columns={columns}
                dataSource={state.setting.menu_group.menu_group}
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


import {
    List,
    Col,
    Row,
    Button,
    Form,
    Input,
    message,
    Modal,
    Table,
    Space,
    Avatar,
    Card,
    Image,
    Tag,
    Select
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {MessageOutlined, LikeOutlined, StarOutlined, TagOutlined} from '@ant-design/icons'
import zongjingban from '../../imgs/zongjingban.png'
import hr from '../../imgs/hr.jpeg'
import {store} from "../../store";
import * as g from "../../g";
import * as time from "../../util/time";


export const Subscribe = (props) => {
    const state = store.useContext();
    const [pagination, setPagination] = React.useState({current: 1, pageSize: 15, total: 0})
    const [userTopics, setUserTopics] = React.useState([])
    const [select, setSelect] = React.useState(null)
    const [selectTopic, setSelectTopic] = React.useState([])
    React.useEffect(() => {
        (async () => {
            await event.topic.getTopic({}, true)
            let topics = await event.user.getUserTopic()
            if (topics.length < 0) {
                message.info('请先订阅主题')
            }
            setUserTopics(topics)
            let p = await event.content.getTopicContent(pagination, topics.map(item => item._id))
            if (p) {
                setPagination(p)
            }
        })()
    }, [])
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            ellipsis: true,
            // width: 200,
            render: (text, record) => {
                return <a target={'blank'} href={record.path}>{record.title}</a>
            }
        }, {
            title: '文件类型',
            dataIndex: 'type',
            key: 'type',
            render: (text, record) => {
                return g.content_type_desc[record.type]
            }
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
        }
    ]
    return (<>
        <Row>

            <Tag style={{margin: 5, "border-radius": "10px"}}
                 onClick={async e => {
                     setSelect(null)
                     setPagination({current: 1, pageSize: 15, total: 0})
                     let p = await event.content.getTopicContent(pagination, userTopics.map(item => item._id))
                     if (p) {
                         setPagination(p)
                     }
                 }}>全部</Tag>
            {userTopics.map(item =>
                <Tag key={item._id} closable style={{margin: 5, "border-radius": "10px"}}
                     onClose={async e => {
                         if (await event.user.setUserTopic('del', [item._id])) {
                             setUserTopics(userTopics.filter(temp => temp._id !== item._id))
                         }
                     }}
                     onClick={async e => {
                         setSelect(item._id)
                         let p = await event.content.getContent(pagination, item._id)
                         if (p) {
                             setPagination(p)
                         }
                     }}>{item.name}</Tag>)}
            <Select
                style={{width: '20%'}}
                mode="multiple"
                allowClear
                placeholder="选择订阅主题"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                value={selectTopic}
                onChange={value => setSelectTopic(value)}
            >
                {state.topic.topic.topic.filter(item => {
                    let topic_id = userTopics.map(item => item._id)
                    if (topic_id) {
                        return topic_id.indexOf(item._id) === -1
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
                if (await event.user.setUserTopic('add', selectTopic)) {
                    let topics = []
                    state.topic.topic.topic.map(item => {
                        if (selectTopic.indexOf(item._id) !== -1) {
                            topics.push(item)
                        }
                    })
                    setSelectTopic([])
                    setUserTopics([...userTopics, ...topics])
                }
            }}>添加</Button>
        </Row>
        <Table
            columns={columns}
            dataSource={state.user.content.contents}
            pagination={pagination}
            onChange={async (param) => {
                let method = null
                if (select) {
                    method = event.content.getContent(pagination, select)
                } else {
                    method = event.content.getTopicContent(pagination, userTopics.map(item => item._id))
                }
                let p = await method
                if (p) {
                    setPagination(pagination)
                }
            }}
            size={'small'}
            bordered
        />
    </>)
}
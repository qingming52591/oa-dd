import {store} from "../../store";
import {
    Col,
    Row,
    Button,
    Form,
    Input,
    message,
    Modal,
    Table,
    Popconfirm,
    Popover,
    Space,
    Radio,
    InputNumber, Divider, Tag, Tabs, Upload, Select
} from "antd";
import * as event from "../../event";
import React from 'react'
import * as g from "../../g";
import * as util from '../../util'
import {keywords} from "d3/dist/package";
import {PlusOutlined} from "@ant-design/icons";
import {topic} from "../../event";
import * as content from './temp_content'


export const TopicContents = (props) => {
    const state = store.useContext()
    const [topic, setTopic] = React.useState("")
    React.useEffect(() => {
        (async () => {
            await event.topic.getTopic({}, true)
        })()
    }, [])
    return (
        <>
            选择主题: <Select style={{width: "30%"}} value={topic.id} onChange={async e => {
            setTopic(e)
            await event.content.getContent({}, topic)
        }}>
            {state.topic.topic.topic.map(item => <Select.Option value={item._id}>{item.name}</Select.Option>)}
        </Select>
            <content.Content add_content={false} topic={topic}/>
        </>
    )
}

// 主题内容运营
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
    Tabs, message, Tag, Popconfirm, Popover, Radio, Cascader
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

function getBase64(file, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
}

export const SaveTag = ({key, keyWord, _id, item, setData, onClose, opt, is_new = false, create = false}) => {
    const [show, setShow] = React.useState(false)
    let data = {
        is_new: is_new,
        tag: '',
        score: 0.0,
        key: keyWord,
        opt: opt,
        _id: _id
    }
    return <Popover
        placement="top"
        trigger={'click'}
        visible={show}
        content={() => {
            if (!is_new) {
                data = {
                    is_new: is_new,
                    tag: item.tag,
                    score: item.score,
                    key: keyWord,
                    opt: opt,
                    _id: _id
                }
            }
            return <Space direction={'vertical'} size={'small'} align={'start'}>
                tag: <Input defaultValue={data.tag}
                            onChange={e => data.tag = e.target.value} size={'small'}/>
                score: <InputNumber defaultValue={data.score}
                                    onChange={n => data.score = parseFloat(n)} min={0}
                                    size={'small'} step={0.01} precision={2}
                                    style={{width: '100%'}}/>
                <Button onClick={() => {
                    setData(data, create)
                    setShow(false)
                }}>保存</Button>
            </Space>
        }}
        destroyTooltipOnHide={true}
        onVisibleChange={e => setShow(e)}
        onClick={e => setShow(true)}
    >
        {is_new ? <Tag>+</Tag> : <Tag key={key} closable onClose={e => {
            if (onClose) onClose(data, create)
            setShow(false)
        }}>{item.tag}</Tag>}
    </Popover>
}

const AddContent = ({type}) => {
    const refUrl = React.useRef(null)
    const [docs, setDocs] = React.useState([])
    const [imgs, setImgs] = React.useState([])
    const [audios, setAudios] = React.useState([])
    if (type === g.content_type.url) {
        return <div>
            <Input ref={refUrl} type={'url'}/>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (!re.url(refUrl.current.state.value)) {
                    message.error('请输入正确的url')
                }
                if (await event.content.saveContent(type, refUrl.current.state.value)) {
                    refUrl.current.setState({...refUrl.current.state, ...{value: ''}})
                }
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.docs) {
        return <div>
            <Upload
                // multiple
                accept=".doc,.pdf"
                listType="picture-card"
                fileList={docs}
                onPreview={(file) => {
                }}
                onChange={({fileList}) => {
                    if (fileList.length <= 5) {
                        setDocs([...fileList])
                    } else {
                        message.error('文件数量不可大于5个')
                    }
                }}
                onRemove={(file) => {
                }}
            >
                {docs.length >= 5 ? null : <PlusOutlined/>}
            </Upload>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (docs.length <= 0) {
                    message.error('文件不可为空')
                    return false
                }
                let waits = docs.map((item) => {
                    return event.content.saveContent(item.originFileObj.type.split('/').pop(), item.originFileObj)
                })
                await Promise.all(waits)
                message.success('上传成功')
                setDocs([])
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.img) {
        return <div>
            <Upload
                // multiple
                accept=".png"
                listType="picture-card"
                fileList={imgs}
                onPreview={(file) => {
                }}
                onChange={({fileList}) => {
                    if (fileList.length <= 5) {
                        setImgs([...fileList])
                    } else {
                        message.error('文件数量不可大于5个')
                    }
                }}
                onRemove={(file) => {
                }}
            >
                {docs.length >= 5 ? null : <PlusOutlined/>}
            </Upload>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (imgs.length <= 0) {
                    message.error('文件不可为空')
                    return false
                }
                let waits = imgs.map((item) => {
                    return event.content.saveContent(type, item.originFileObj)
                })
                await Promise.all(waits)
                message.success('上传成功')
                setImgs([])
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.audio) {
        return <div>
            <Upload
                // multiple
                accept=".mp3"
                listType="picture-card"
                fileList={audios}
                onPreview={(file) => {
                }}
                onChange={({fileList}) => {
                    if (fileList.length <= 5) {
                        setAudios([...fileList])
                    } else {
                        message.error('文件数量不可大于5个')
                    }
                }}
                onRemove={(file) => {
                }}
            >
                {audios.length >= 5 ? null : <PlusOutlined/>}
            </Upload>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (audios.length <= 0) {
                    message.error('文件不可为空')
                    return false
                }
                let waits = audios.map((item) => {
                    return event.content.saveContent(type, item.originFileObj)
                })
                await Promise.all(waits)
                message.success('上传成功')
                setAudios([])
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.video) {
        util.goPage('/menu/video')
    } else {
        return <div>Hello World</div>
    }
}

export const TopicContentOpt = (props) => {
    let add_content = false
    if (props.add_content === undefined) {
        add_content = true
    } else {
        add_content = props.add_content
    }
    let topic = ''
    if (props.topic !== undefined && props.topic.length > 0) {
        topic = props.topic
    }
    const state = store.useContext();
    const [imgs, setImags] = React.useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
        panelKey: [],
        viewResult: false
    })
    const [popEdit, setPopEdit] = React.useState({
        offsetX: 0,
        offsetY: 0,
        show: false,
        trigger: false,
        tag: '',
        type: 'entity',
        score: 1
    })
    const [showResult, setShowResult] = React.useState(false)
    const [topicShow, setTopicShow] = React.useState(false)
    const [selectTopic, setSelectTopic] = React.useState([])
    const [edit, setEdit] = React.useState(
        {
            title_edit: false,
            summary_edit: false,
            type_new: false,
            type_edit: null,
            entity_new: false,
            entity_edit: null,
            label_new: false,
            label_edit: null,
            data: {}
        })

    const [table, setTable] = React.useState({
        pagination: {current: 1, pageSize: 15, total: 0},
        loading: false
    })

    React.useEffect(() => {
        (async () => {
            let pagination = await event.content.getContent(table.pagination, topic)
            if (pagination) {
                setTable({...table, ...{pagination: pagination}})
            }
            await event.topic.getTopic({}, true)
        })()
    }, [])
    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>上传</div>
        </div>
    );

    const saveData = async (data, create) => {
        let new_data = []
        let key = ''
        if (data.opt === 'type') {
            new_data = [...edit.data.bilstm_category]
            key = 'bilstm_category'
        } else if (data.opt === 'entity') {
            new_data = [...edit.data.bilstm_entity]
            key = 'bilstm_entity'
        } else if (data.opt === 'label') {
            new_data = [...edit.data.bilstm_label]
            key = 'bilstm_label'
        } else {
            return
        }
        if (data.is_new) {
            new_data.push({
                tag: data.tag,
                score: data.score,
                state: 0
            })
        } else {
            new_data = new_data.map(item => item.tag === data.key ? {
                tag: data.tag,
                score: data.score,
                state: 0
            } : item)
        }
        if (!await event.content.updateContent(data._id, key, new_data)) {
            message.error('修改失败')
            return false
        }
        setEdit({
            ...edit, ...{
                data: {...edit.data, ...{[key]: new_data}}
            }
        })
        return true
    }
    const onClose = async (data, create) => {
        let new_data = []
        let key = ''
        if (data.opt === 'type') {
            new_data = edit.data.bilstm_category.filter(item => item.tag !== data.tag)
            key = 'bilstm_category'
        } else if (data.opt === 'entity') {
            new_data = edit.data.bilstm_entity.filter(item => item.tag !== data.tag)
            key = 'bilstm_entity'
        } else if (data.opt === 'label') {
            new_data = edit.data.bilstm_label.filter(item => item.tag !== data.tag)
            key = 'bilstm_label'
        } else {
            return
        }
        if (!await event.content.updateContent(data._id, key, new_data)) {
            message.error('修改失败')
            return false
        }
        let new_category =
            setEdit({
                ...edit, ...{
                    data: {...edit.data, ...{[key]: new_data}}
                }
            })
    }

    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            ellipsis: true,
            // width: 200,
            render: (text, record) => {
                return record.title
            }
        }, {
            title: '文件类型',
            dataIndex: 'type',
            key: 'type',
            render: (text, record) => {
                return g.content_type_desc[record.type]
            }
        }, {
            title: '主题',
            dataIndex: 'topic',
            key: 'topic',
            render: (text, record) => {
                let topics = record.topic ? record.topic : []
                return topics.map(item => {
                    let topic = state.topic.topic.topic.filter(temp => item === temp._id)
                    topic = topic[0]
                    if (!topic) {
                        return null
                    }
                    return <Tag>{topic.name}</Tag>
                })
            }
        }, {
            title: '处理状态',
            dataIndex: 'result',
            key: 'result',
            render: (text, record) => {
                return g.contents_result_desc[record.result]
            }
        }, {
            title: '摘要',
            dataIndex: 'yl_summary',
            key: 'yl_summary',
            render: (text, record) => {
                return record.yl_summary.slice(0, 40)
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="link"
                                onClick={(e) => {
                                    setEdit({
                                        ...edit, ...{
                                            data: {...record}
                                        }
                                    })
                                    setTopicShow(true)
                                }}>主题</Button>
                    </>
                )
            }
        }
    ]
    return (
        <>
            <Modal title={'查看主题'} visible={topicShow}
                   onOk={() => setTopicShow(false)}
                   onCancel={() => setTopicShow(false)}
                   footer={null}
                   width={'65%'}
            >
                {edit.data.topic ? edit.data.topic.map((item, index) => {
                    let topic = state.topic.topic.topic.filter(temp => item === temp._id)
                    topic = topic[0]
                    return <Tag key={topic._id} closable onClose={async e => {
                        let t = edit.data.topic.filter((tt, i) => i !== index)
                        if (!await event.content.updateContent(edit.data._id, 'topic', t)) {
                            message.error('修改失败')
                            return false
                        }
                        setEdit({
                            ...edit, ...{
                                data: {...edit.data, ...{topic: t}}
                            }
                        })
                    }}>{topic.name}</Tag>
                }) : null}
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
                        if (edit.data.topic) {
                            return edit.data.topic.indexOf(item._id) === -1
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
                    if (edit.data.topic) {
                        topic = [...edit.data.topic, ...selectTopic]
                    } else {
                        topic = selectTopic
                    }
                    if (!await event.content.updateContent(edit.data._id, 'topic', topic)) {
                        message.error('修改失败')
                        return false
                    }
                    setEdit({
                        ...edit, ...{
                            data: {...edit.data, ...{topic: topic}}
                        }
                    })
                    setSelectTopic([])
                }}>添加</Button>
            </Modal>
            <Table
                columns={columns}
                dataSource={state.user.content.contents}
                pagination={table.pagination}
                onChange={async (param) => {
                    let pagination = await event.content.getContent(param, topic)
                    if (pagination) {
                        setTable({...table, ...{pagination: pagination}})
                    }
                }}
                size={'small'}
                bordered
            />
        </>
    )
}


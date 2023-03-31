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
import * as time from '../../util/time'
import * as g from '../../g'
import test_img from '../../imgs/7777.png'
import {store} from "../../store";
import {SaveTag} from './temp_content'

export const EntityLabel = (props) => {
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

    const saveData = async (data) => {
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
    const onClose = async (data) => {
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
                return (
                    <>
                        <Button type="link" disabled={record.result ? true : false}
                                onClick={(e) => {
                                    setEdit({
                                        ...edit, ...{
                                            data: {...record}
                                        }
                                    })
                                    setShowResult(true)
                                }}>结果展示</Button>
                        <Button type="link" onClick={async () => {
                            await event.content.deleteContent(record._id, table.pagination)
                            message.success('删除成功')
                        }}>删除</Button>
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
            <Modal title={'查看结果'} visible={showResult}
                   onOk={() => setShowResult(false)}
                   onCancel={() => setShowResult(false)}
                   footer={null}
                   width={'75%'}
            >
                <Row>
                    <Col span={16}>
                        <Popover
                            trigger={'click'}
                            visible={popEdit.show}
                            placement="right"
                            align={{
                                offset: [popEdit.offsetX, popEdit.offsetY],
                            }}
                            onVisibleChange={(visible) => {
                                if (!visible && !popEdit.trigger) setPopEdit({...popEdit, ...{show: visible}})
                            }}
                            content={() => {
                                return <Space direction={'vertical'} size={'small'} align={'start'}>
                                    tag: <Input disabled={true} value={popEdit.tag}
                                                onChange={e => setPopEdit({...popEdit, ...{tag: e.target.value}})}
                                                size={'small'}/>
                                    类型: <Radio.Group
                                    value={popEdit.type}
                                    options={[
                                        {label: '实体', value: 'entity'},
                                        {label: '标签', value: 'label'},
                                        {label: '分类', value: 'category'}
                                    ]}
                                    onChange={(e) => setPopEdit({...popEdit, ...{type: e.target.value}})}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                                    score: <InputNumber value={popEdit.score}
                                                        onChange={e => setPopEdit({...popEdit, ...{score: parseFloat(e.target.value)}})}
                                                        min={0}
                                                        size={'small'} step={0.01} precision={2}
                                                        style={{width: '100%'}}/>
                                    <Button onClick={async () => {
                                        if (!await saveData({
                                            is_new: true,
                                            tag: popEdit.tag,
                                            score: popEdit.score,
                                            key: popEdit.tag,
                                            opt: popEdit.type,
                                            _id: edit.data._id
                                        })) {
                                            return
                                        }
                                        setPopEdit({...popEdit, ...{trigger: false, show: false}})
                                        message.success('成功')
                                    }}>保存</Button>
                                </Space>
                            }}
                        >
                            <div
                                style={{position: "relative"}}
                                onMouseUp={(e) => {
                                    let selected = window.getSelection().toString()
                                    if (selected.length > 0) {
                                        let target = e.target
                                        let top = target.offsetTop
                                        let left = target.offsetLeft
                                        let current = target.offsetParent
                                        let target_origin_x = -target.offsetWidth
                                        let target_origin_y = -target.offsetHeight / 2
                                        while (current !== null) {
                                            left += current.offsetLeft
                                            top += current.offsetTop
                                            current = current.offsetParent;
                                        }
                                        console.log(target_origin_x, target_origin_y)
                                        setPopEdit({
                                            ...popEdit, ...{
                                                offsetX: e.nativeEvent.offsetX + target_origin_x,
                                                offsetY: e.nativeEvent.offsetY + target_origin_y,
                                                show: true,
                                                trigger: true,
                                                tag: selected
                                            }
                                        })
                                    } else {
                                        setPopEdit({...popEdit, ...{trigger: false, tag: ''}})
                                        e.stopPropagation()
                                    }
                                }}>
                                {edit.data.content}
                            </div>
                        </Popover>
                    </Col>
                    <Col span={8} style={{paddingLeft: 10}}>
                        <Divider orientation={'left'}>标题</Divider>
                        <span onDoubleClick={(e) => {
                            setEdit({...edit, ...{title_edit: true}})
                        }}>
                                    {(() => {
                                        if (edit.title_edit) {
                                            return <Input
                                                ref={input => input ? input.focus() : null}
                                                value={edit.data.title}
                                                onChange={(e) => {
                                                    setEdit({
                                                        ...edit, ...{
                                                            data: {...edit.data, ...{title: e.target.value}}
                                                        }
                                                    })
                                                }}
                                                onPressEnter={async (e) => {
                                                    if (!await event.content.updateContent(edit.data._id, 'title', edit.data.title)) {
                                                        message.error('修改失败')
                                                        return false
                                                    }
                                                    setEdit({...edit, ...{title_edit: false}})
                                                }}
                                                onBlur={async e => {
                                                    if (!await event.content.updateContent(edit.data._id, 'title', edit.data.title)) {
                                                        message.error('修改失败')
                                                        return false
                                                    }
                                                    setEdit({...edit, ...{title_edit: false}})
                                                }
                                                }
                                            ></Input>
                                        } else {
                                            return edit.data.title
                                        }
                                    })()}
                                    </span>
                        <Divider orientation={'left'}>摘要</Divider>
                        <span onDoubleClick={(e) => {
                            setEdit({...edit, ...{summary_edit: true}})
                        }}>
                                    {(() => {
                                        if (edit.summary_edit) {
                                            return <Input.TextArea
                                                rows={10}
                                                ref={input => input ? input.focus() : null}
                                                value={edit.data.yl_summary}
                                                onChange={(e) => {
                                                    setEdit({
                                                        ...edit, ...{
                                                            data: {...edit.data, ...{yl_summary: e.target.value}}
                                                        }
                                                    })
                                                }}
                                                onPressEnter={async e => {
                                                    if (!await event.content.updateContent(edit.data._id, 'yl_summary', edit.data.yl_summary)) {
                                                        message.error('修改失败')
                                                        return false
                                                    }
                                                    setEdit({...edit, ...{summary_edit: false}})
                                                }
                                                }
                                                onBlur={async e => {
                                                    if (!await event.content.updateContent(edit.data._id, 'yl_summary', edit.data.yl_summary)) {
                                                        message.error('修改失败')
                                                        return false
                                                    }
                                                    setEdit({...edit, ...{summary_edit: false}})
                                                }
                                                }
                                            ></Input.TextArea>
                                        } else {
                                            return edit.data.yl_summary
                                        }
                                    })()}
                                    </span>
                        <Divider orientation={'left'}>分类</Divider>
                        {(() => {
                            if (edit.data.bilstm_category) {
                                return edit.data.bilstm_category.map((item, index) => {
                                    return <SaveTag _id={edit.data._id} key={item.tag} keyWord={item.tag} item={item}
                                                    setData={saveData}
                                                    onClose={onClose} opt={'type'}/>
                                })
                            }
                        })()}
                        <SaveTag _id={edit.data._id} is_new={true} setData={saveData} opt={'type'}/>
                        <Divider orientation={'left'}>实体</Divider>
                        {(() => {
                            if (edit.data.bilstm_entity) {
                                return edit.data.bilstm_entity.map((item, index) => {
                                    return <SaveTag _id={edit.data._id} key={item.tag} keyWord={item.tag} item={item}
                                                    setData={saveData}
                                                    onClose={onClose} opt={'entity'}/>
                                })
                            }
                        })()}
                        <SaveTag _id={edit.data._id} is_new={true} setData={saveData} opt={'entity'}/>
                        <Divider orientation={'left'}>标签</Divider>
                        {(() => {
                            if (edit.data.bilstm_label) {
                                return edit.data.bilstm_label.map((item, index) => {
                                    return <SaveTag _id={edit.data._id} key={item.tag} keyWord={item.tag} item={item}
                                                    setData={saveData}
                                                    onClose={onClose} opt={'label'}/>
                                })
                            }
                        })()}
                        <SaveTag _id={edit.data._id} is_new={true} setData={saveData} opt={'label'}/>
                    </Col>
                </Row>
            </Modal>
            <Table
                columns={columns}
                dataSource={state.user.content.contents}
                pagination={table.pagination}
                onChange={async (param) => {
                    console.log(param)
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
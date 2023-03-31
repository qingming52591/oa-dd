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
    Tabs, message, Tag, Popconfirm, Popover, Radio, Cascader, Tooltip
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
import TextArea from "antd/es/input/TextArea";

export const Knowledge = (props) => {
    const state = store.useContext();
    const [table, setTable] = React.useState({
        pagination: {current: 1, pageSize: 15, total: 0},
        loading: false
    })
    const [edit, setEdit] = React.useState({
        "_id": "",
        "app_id": 10,
        "uid": "0",
        "content_id": "",
        "question": "",
        "answer": "",
        "entity": [],
        "label": [],
        "agree_num": 0,
        "disagree_num": 0,
        "create_time": 0,
        "status": 0
    })
    const [showResult, setShowResult] = React.useState(false)
    const [showCreate, setShowCreate] = React.useState(false)
    const [qEdit, setQEdit] = React.useState(false)
    const [aEdit, setAEdit] = React.useState(false)
    React.useEffect(() => {
        (async () => {
            let pagination = await event.qa.getQa(table.pagination)
            if (pagination) {
                setTable({...table, ...{pagination: pagination}})
            }
        })()
    }, [])

    const columns = [
        {
            title: '问题',
            dataIndex: 'question',
            key: 'question',
            ellipsis: true
        }, {
            title: '答案',
            dataIndex: 'answer',
            key: 'answer',
            onCell: () => {
                return {
                    style: {
                        maxWidth: 150,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        cursor: 'pointer'
                    }
                }
            },
            render: (text, record) => {
                return <Tooltip trigger={"hover"} placement="right" title={text}>{text}</Tooltip>
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="link"
                                onClick={(e) => {
                                    setEdit(record)
                                    setShowResult(true)
                                }}>修改</Button>
                        <Button type="link" onClick={async () => {
                            await event.qa.deleteQa(record._id, table.pagination)
                            message.success('删除成功')
                        }}>删除</Button>
                    </>
                )
            }
        }
    ]
    const saveData = async (data, create) => {
        let new_data = []
        let key = ''
        if (data.opt === 'entity') {
            new_data = [...edit.entity]
            key = 'entity'
        } else if (data.opt === 'label') {
            new_data = [...edit.label]
            key = 'label'
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
        if (!create && !await event.qa.updateQa(edit._id, key, new_data)) {
            message.error('修改失败')
            return false
        }
        setEdit({
            ...edit, ...{[key]: new_data}
        })
        return true
    }
    const onClose = async (data, create) => {
        let new_data = []
        let key = ''
        if (data.opt === 'entity') {
            new_data = edit.entity.filter(item => item.tag !== data.tag)
            key = 'entity'
        } else if (data.opt === 'label') {
            new_data = edit.label.filter(item => item.tag !== data.tag)
            key = 'label'
        } else {
            return
        }
        if (!create && !await event.qa.updateQa(edit._id, key, new_data)) {
            message.error('修改失败')
            return false
        }
        setEdit({...edit, ...{[key]: new_data}})
    }
    return (
        <>
            <Modal title={'查看结果'} visible={showResult}
                   onOk={() => {
                       setShowResult(false)
                       setShowCreate(false)
                   }}
                   onCancel={() => {
                       setShowResult(false)
                       setShowCreate(false)
                   }}
                   footer={null}
                   width={'75%'}
            >
                <Row>
                    <div style={{width: "100%"}}>
                        <Divider orientation={'left'}>问题</Divider>
                        <span onDoubleClick={(e) => {
                            setQEdit(true)
                        }}>
                            {(() => {
                                if (showCreate) {
                                    return <Input
                                        value={edit.question}
                                        onChange={(e) => {
                                            setEdit({
                                                ...edit, ...{question: e.target.value}
                                            })
                                        }}
                                    ></Input>
                                } else {
                                    if (qEdit) {
                                        return <Input
                                            ref={input => input ? input.focus() : null}
                                            value={edit.question}
                                            width={"100%"}
                                            onChange={(e) => {
                                                setEdit({
                                                    ...edit, ...{question: e.target.value}
                                                })
                                            }}
                                            onPressEnter={async (e) => {
                                                if (!await event.qa.updateQa(edit._id, 'question', edit.question)) {
                                                    message.error('修改失败')
                                                    return false
                                                }
                                                setQEdit(false)
                                            }}
                                            onBlur={async e => {
                                                if (!await event.qa.updateQa(edit._id, 'question', edit.question)) {
                                                    message.error('修改失败')
                                                    return false
                                                }
                                                setQEdit(false)
                                            }
                                            }
                                        ></Input>
                                    } else {
                                        return edit.question
                                    }
                                }
                            })()}
                        </span>
                        <Divider orientation={'left'}>答案</Divider>
                        <span onDoubleClick={(e) => {
                            setAEdit(true)
                        }}>
                            {(() => {
                                if (showCreate) {
                                    return <Input.TextArea
                                        rows={10}
                                        value={edit.answer}
                                        onChange={(e) => {
                                            setEdit({
                                                ...edit, ...{answer: e.target.value}
                                            })
                                        }}
                                    ></Input.TextArea>
                                } else {
                                    if (aEdit) {
                                        return <Input.TextArea
                                            rows={10}
                                            ref={input => input ? input.focus() : null}
                                            value={edit.answer}
                                            onChange={(e) => {
                                                setEdit({
                                                    ...edit, ...{answer: e.target.value}
                                                })
                                            }}
                                            onPressEnter={async e => {
                                                if (!await event.qa.updateQa(edit._id, 'answer', edit.answer)) {
                                                    message.error('修改失败')
                                                    return false
                                                }
                                                setAEdit(false)
                                            }
                                            }
                                            onBlur={async e => {
                                                if (!await event.qa.updateQa(edit._id, 'answer', edit.answer)) {
                                                    message.error('修改失败')
                                                    return false
                                                }
                                                setAEdit(false)
                                            }
                                            }
                                        ></Input.TextArea>
                                    } else {
                                        return edit.answer
                                    }
                                }
                            })()}
                        </span>
                    </div>
                    <Divider orientation={'left'}>实体</Divider>
                    {(() => {
                        return <div>
                            {edit.entity.map((item, index) => {
                                return <SaveTag _id={edit._id} key={item.tag} keyWord={item.tag} item={item}
                                                setData={saveData}
                                                onClose={onClose} create={showCreate} opt={'entity'}/>
                            })}
                            <SaveTag _id={edit._id} is_new={true} setData={saveData} opt={'entity'}
                                     create={showCreate}/>
                        </div>
                    })()}

                    <Divider orientation={'left'}>标签</Divider>
                    {(() => {
                        return <div>
                            {edit.label.map((item, index) => {
                                return <SaveTag _id={edit._id} key={item.tag} keyWord={item.tag} item={item}
                                                setData={saveData}
                                                onClose={onClose} create={showCreate} opt={'label'}/>
                            })}
                            <SaveTag _id={edit._id} is_new={true} setData={saveData} create={showCreate} opt={'label'}/>
                        </div>
                    })()}
                </Row>
                {(() => {
                    if (showCreate) {
                        return <div><br/>
                            <Button onClick={async e => {
                                if (!await event.qa.saveQa(edit, table.pagination)) {
                                    message.error('修改失败')
                                    return false
                                }
                                setShowResult(false)
                                setShowCreate(false)
                            }}>保存</Button>
                        </div>
                    }
                })()}
            </Modal>
            <Row justify={'end'}>
                <Button type={'primary'} onClick={async () => {
                    setEdit({
                        ...edit, ...{
                            "_id": "",
                            "app_id": 10,
                            "uid": "0",
                            "content_id": "",
                            "question": "",
                            "answer": "",
                            "entity": [],
                            "label": [],
                            "agree_num": 0,
                            "disagree_num": 0,
                            "create_time": 0,
                            "status": 0
                        }
                    })
                    setShowCreate(true)
                    setShowResult(true)
                }}>创建问答</Button>
            </Row>
            <Table
                columns={columns}
                dataSource={state.qa.qas}
                pagination={table.pagination}
                onChange={async (param) => {
                    let pagination = await event.qa.getQa(param)
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

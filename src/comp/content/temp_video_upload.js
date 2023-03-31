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
    Tag
} from "antd";
import config from "../../conf"
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {InboxOutlined} from '@ant-design/icons'
import * as util from '../../util'
import {store} from "../../store"
import * as g from '../../g'

export const VideoUpload = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    React.useEffect(() => {
        (async () => {
            await event.video.getVideo()
        })()
    }, [])
    const columns = [
        {
            title: '视频名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '关键词',
            dataIndex: 'keywords',
            key: 'keywords',
            render: (text, record) => {
                return record.keywords.map(item => <Tag>{item}</Tag>)
            }
        }, {
            title: '时长',
            dataIndex: 'duration',
            key: 'duration',
        }, {
            title: '清晰度',
            dataIndex: 'sharpness',
            key: 'sharpness',
        }, {
            title: '关键帧',
            dataIndex: 'keyframe',
            key: 'keyframe',
            render: (text, record) => {
                if (record.status === g.video_status.success) {
                    return <Button type="link" onClick={() => {
                        Modal.info({
                            title: record.video_name,
                            content: (
                                <div>
                                    {record.keyframe.map(item =>
                                        <img style={{
                                            marginBottom: 10,
                                            width: "100%",
                                            height: "100%",
                                            "object-fit": "fill"
                                        }}
                                             id={record.id} controls
                                             src={`${config.VIDEO_BASE}/video/${item}`}/>)}

                                </div>
                            ),
                            onOk() {
                            },
                        });
                    }}>查看关键帧</Button>
                }
            }
        }, {
            title: '声音分离',
            dataIndex: 'keyframe',
            key: 'keyframe',
            render: (text, record) => {
                if (record.status === g.video_status.success) {
                    return <>
                        <Button type="link" onClick={() => {
                            Modal.info({
                                title: record.video_name,
                                content: (
                                    <div>
                                        <div>人声</div>
                                        <audio controls>
                                            <source src={`${config.VIDEO_BASE}/video/${record.human_audio}`}/>
                                        </audio>
                                        <div>背景声</div>
                                        <audio controls>
                                            <source src={`${config.VIDEO_BASE}/video/${record.bg_audio}`}/>
                                        </audio>
                                    </div>
                                ),
                                onOk() {
                                },
                            });
                        }}>查看声音</Button>
                    </>
                }
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
                            Modal.info({
                                title: record.video_name,
                                content: (
                                    <div>
                                        <div>原视频:</div>
                                        <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                                               id={record.id} controls
                                               src={`${config.VIDEO_BASE}/video/${record.origin}`}/>
                                        <div>精彩片段:</div>
                                        {record.video_clip.map(item =>
                                            <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                                                   id={record.id} controls
                                                   src={`${config.VIDEO_BASE}/video/${item}`}/>)}

                                    </div>
                                ),
                                onOk() {
                                },
                            });
                        }}>结果展示</Button>
                        <Button type="link" onClick={async e => {
                            if (!event.video.deleteVideo(record._id)) {
                                message.error('失败')
                                return false
                            }
                        }}>删除</Button>
                    </Space>
                </>)
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <EditVideoUpload show={showModal} setShow={setShowModal}></EditVideoUpload>
                <Button type={'primary'} onClick={e => {
                    setShowModal(true)
                }}>上传视频</Button>
            </Row>
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

const EditVideoUpload = (props) => {
    const [video, setVideo] = React.useState('')
    const [showVideo, setShowVideo] = React.useState(0)
    const [submitData, setSubmitData = new FormData()] = React.useState({
        name: null,
        video: null
    })

    function getBase64(file, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    const getBlob = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    return (
        <>
            <Modal
                title={'编辑'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    setShowVideo(0)
                    setVideo('')
                }}
                onOk={async () => {
                    if (!submitData.name) {
                        message.error('请填写视频名称')
                        return false
                    }
                    if (!submitData.video) {
                        message.error("请选择上传视频")
                        return false
                    }
                    let formData = new FormData()
                    formData.append('name', submitData.name)
                    formData.append('video', submitData.video)
                    await event.video.saveVideo(formData)
                    props.setShow(false)
                    setShowVideo(0)
                    setVideo('')
                }}
            >
                视频名称: <Input value={submitData.name} onChange={(e) => {
                setSubmitData({...submitData, ...{name: e.target.value}})
            }}/>
                <Divider/>
                <Upload.Dragger accept={"video/mp4"}
                                multiple={false}
                                beforeUpload={file => {
                                    setSubmitData({...submitData, ...{video: file}})
                                    getBase64(file, fileObj => {
                                        setVideo(fileObj)
                                        setShowVideo(24)
                                    })
                                }}
                                onRemove={file => {
                                    setShowVideo(0)
                                    setVideo('')
                                }}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">点击上传或拖拽视频文件上传</p>
                </Upload.Dragger>
                <Row>
                    <Col span={showVideo}>
                        <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                               src={video}
                               controls></video>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}
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
    Divider
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {InboxOutlined, PlusOutlined} from '@ant-design/icons'
import * as util from '../../util'
import test_img from '../../imgs/7777.png'

export const OCR = (props) => {
    const [imgs, setImags] = React.useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
        panelKey: [],
        viewResult: false
    })
    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>上传</div>
        </div>
    );

    function getBase64(file, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    const columns = [
        {
            title: '唯一标识',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '处理状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => {
                if (record.status === 1)
                    return "处理完成"
                else {
                    return "处理中"
                }
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="link" disabled={record.status ? false : true}
                                onClick={(e) => setImags({...imgs, ...{viewResult: true}})}>结果展示</Button>
                        <Button type="link">删除</Button>
                        <Modal
                            visible={imgs.viewResult}
                            title={"结果展示"}
                            footer={null}
                            onCancel={() => setImags({...imgs, ...{viewResult: false}})}
                            width={1000}
                        >
                            <Space direction={"vertical"}>
                                <img style={{width: '100%'}}
                                     src={test_img}/>
                                <Divider type={"horizontal"}/>
                                <div>
                                    从20121年Google的图像识别错误率明显下降，机器在图像识别方面接近人类水平；到2016年AlphaGo战胜了人类围棋冠军；
                                    再到2017 年AlphaZero战胜了AlphaGo，已经DeepMind去尝试星际争霸游戏，这一系列AI发展的标志性事件让我们看到了人工智能技术
                                    帮助人类社会发展若干问题的希望。我们已经见证的这一系列人工智能技术的发展，本质上是受益于大数据给人工智能带来的数据红利。
                                    这一波人工智能潮实在大数据所给予的海量标注样本以及超强计算机能力这两个强大的支撑作用下所形成的。
                                    可以说，这一波人工智能本质上是大数据喂养出来的。到了今天，可以很自豪地宣布机器智能再感知智能和计算智能等若干具体问题上已经达到甚至
                                    超越人类水平。现在，在语音识别与合成、图像识别、封闭环境有限规则的游戏领域等问题上，机器智能水平堪比、甚至超越人类水平。
                                </div>
                            </Space>


                        </Modal>
                    </>
                )
            }
        }
    ]
    return (
        <>
            <Collapse onChange={(d) => {
                setImags({...imgs, ...{panelKey: d}})
            }} activeKey={imgs.panelKey} style={{margin: "10px 0px"}}>
                <Collapse.Panel collapsible={'disabled'} showArrow={false} header="上传图片" key={'1'}>
                    <Upload
                        listType="picture-card"
                        fileList={imgs.fileList}
                        multiple={true}
                        onPreview={file => {
                            util.log(file)
                            setImags({...imgs, ...{previewVisible: true, previewImage: file.url}})
                        }}
                        beforeUpload={file => {
                            getBase64(file, fileObj => {
                                let t_imgs = {...imgs}
                                t_imgs.fileList.push({
                                    uid: t_imgs.fileList.length,
                                    name: 'image.png',
                                    status: 'done',
                                    url: fileObj,
                                })
                                setImags(t_imgs)
                            })
                        }}
                        onRemove={(file) => {
                            setImags({...imgs, ...{fileList: imgs.fileList.filter(({uid}) => uid !== file.uid)}})
                        }}
                    >
                        {imgs.fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Button onClick={(e) => {
                        setImags({...imgs, ...{panelKey: [], fileList: []}})
                    }}>完成</Button>
                    <Modal
                        visible={imgs.previewVisible}
                        title={"图片预览"}
                        footer={null}
                        onCancel={() => setImags({...imgs, ...{previewVisible: false}})}
                    >
                        <img alt="example" style={{width: '100%'}} src={imgs.previewImage}/>
                    </Modal>
                </Collapse.Panel>
            </Collapse>
            <Table
                columns={columns}
                dataSource={[
                    {
                        id: "1605760010680",
                        status: 0
                    },
                    {
                        id: "1605760012650",
                        status: 1
                    },
                    {
                        id: "1605760020120",
                        status: 0
                    },
                    {
                        id: "1605760020360",
                        status: 1
                    },
                    {
                        id: "1605760030650",
                        status: 1
                    }
                ]}
                size={'small'}
                bordered
            />
        </>
    )
}

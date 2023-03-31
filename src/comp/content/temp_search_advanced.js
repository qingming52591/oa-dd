import {Select, Space, Button, Form, Input, Row, Radio, message, Empty, Col, Image, Tag, Card, Pagination} from "antd";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import React from 'react'
import * as event from '../../event'
import * as util from '../../util'

const add_search_condition = (form, field, index, add, remove) => {
    return (
        <>
            <Space key={field.key}>
                <Form.Item
                    noStyle
                    shouldUpdate
                >
                    {() => {
                        if (index > 0) {
                            return (<Form.Item
                                {...field}
                                name={[field.name, 'and_or']}
                                fieldKey={[field.fieldKey, 'and_or']}
                                rules={[{required: true, message: '请选择'}]}
                            >
                                <Radio.Group
                                    options={[{label: 'And', value: 'and'}, {label: 'Or', value: 'or'}]}
                                    value={'and'}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                            </Form.Item>)
                        }
                    }}
                </Form.Item>
                {/*search text*/}
                <Form.Item
                    noStyle
                    shouldUpdate
                >
                    {() => {
                        return (
                            <>
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'title']}
                                    fieldKey={[field.fieldKey, 'title']}
                                    rules={[{required: true, message: '请选择'}]}
                                >
                                    <Select style={{width: 130}}>
                                        {(['text', 'title(only)', 'source name']).map(item => (
                                            <Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </>
                        )
                    }}
                </Form.Item>
                <Form.Item
                    {...field}
                    name={[field.name, 'title_value']}
                    fieldKey={[field.fieldKey, 'title_value']}
                >
                    <Input/>
                </Form.Item>
                {/*category*/}
                <Form.Item
                    noStyle
                    shouldUpdate
                >
                    {() => {
                        return (
                            <>
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'category']}
                                    fieldKey={[field.fieldKey, 'category']}
                                    rules={[{required: true, message: '请选择'}]}
                                >
                                    <Select style={{width: 130}}>
                                        {(['Category', 'Entity', 'Label', 'tag']).map(item => (
                                            <Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </>
                        )
                    }}
                </Form.Item>
                <Form.Item
                    {...field}
                    name={[field.name, 'category_value']}
                    fieldKey={[field.fieldKey, 'category_value']}
                >
                    <Input/>
                </Form.Item>


                <MinusCircleOutlined onClick={() => remove(field.name)}/>
            </Space><br/>
        </>
    )
}

export const Search = (props) => {
    const [form] = Form.useForm();
    const [advance, setAdvance] = React.useState(false)
    const [data, setData] = React.useState([])
    const [subData, setSubData] = React.useState([])
    const [kw, setKw] = React.useState([])
    const [selectKw, setSelectKw] = React.useState([])
    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    return (
        <div>
            <Row justify="center">
                <Form form={form} name="dynamic_form_nest_item" autoComplete="off">
                    <Space>
                        <Form.Item name={'search'}>
                            <Input.Search
                                placeholder="输入搜索内容"
                                enterButton="搜索"
                                size="large"
                                onSearch={async () => {
                                    let kw = form.getFieldValue('search')
                                    let r = await event.search.search(`kw=${kw}`)
                                    if (r) {
                                        let s_r = []
                                        let s_kw = []
                                        r.data.result.map(async (item, index) => {
                                            let keywords = item.label.split(' ')
                                            s_r.push({
                                                title: item.title,
                                                summary: item.content,
                                                url: item.article_url,
                                                keywords: keywords
                                            })
                                            s_kw = s_kw.concat(keywords.filter(temp => temp.length > 0).slice(0, 6))
                                            return item
                                        })
                                        setData(s_r)
                                        s_kw = Array.from(new Set(s_kw))
                                        setKw(s_kw)
                                        setSubData([])
                                    }
                                }}
                                style={{width: '750px'}}
                            />

                        </Form.Item>
                        <Button onClick={(e) => {
                            setAdvance(advance ? false : true)
                        }} type={"link"}>高级搜索</Button>
                    </Space>
                    <Form.Item noStyle shouldUpdate>
                        {(ins) => {
                            if (advance) {
                                return (
                                    <Form.Item noStyle shouldUpdate>
                                        <Form.List name="advance">
                                            {(fields, {add, remove}) => {
                                                return (
                                                    <div>
                                                        {fields.map((field, index) => {
                                                            return add_search_condition(form, field, index, add, remove)
                                                        })}

                                                        <Form.Item>
                                                            <Button type="dashed" block icon={<PlusOutlined/>}
                                                                    onClick={() => {
                                                                        if (fields.length < 3) {
                                                                            add()
                                                                        } else {
                                                                            message.error('同时只可添加3个条件')
                                                                        }

                                                                    }}>
                                                                添加查询条件
                                                            </Button>
                                                        </Form.Item>
                                                    </div>
                                                )
                                            }}
                                        </Form.List>
                                        <Space>
                                            <Form.Item
                                                name={['key', 'time']}
                                            >
                                                <Select style={{width: 130}} placeholder={"时间"}>
                                                    {(['Last 72 hours', '7 days', '14 days', '30 days']).map(item => (
                                                        <Select.Option key={item} value={item}>
                                                            {item}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                name={['key', 'method']}
                                            >
                                                <Select style={{width: 130}} placeholder={"方法"}>
                                                    {(['Contains', 'Vector similarity']).map(item => (
                                                        <Select.Option key={item} value={item}>
                                                            {item}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                name={['key', 'sort_by']}
                                            >
                                                <Select style={{width: 130}} placeholder={"sort by"}>
                                                    {(['relevancy score', 'timeliness']).map(item => (
                                                        <Select.Option key={item} value={item}>
                                                            {item}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>

                                        </Space>
                                    </Form.Item>
                                )
                            }

                        }}
                    </Form.Item>
                </Form>
            </Row>
            <Row justify={"center"}>
                <Col span={10}>
                    {data.map((item) => {
                        return (
                            <Card style={{margin: "0 50px"}}>
                                <Row onMouseEnter={() => {
                                    setSelectKw(item.keywords)
                                }}>
                                    <Space direction={"vertical"}>
                                        <a href={item.url}
                                           target={"_blank"}>{item.title.replaceAll('<b>', '').replaceAll('</b>', '')}</a>
                                        <div>{item.summary.substr(0, 200)}</div>
                                    </Space>
                                </Row>
                            </Card>
                        )
                    })}
                    {data.length ? <Row justify={'center'} style={{marginTop: "10px"}}>
                        <Pagination defaultCurrent={1} total={500}/>
                    </Row> : null}
                </Col>
                <Col span={6}>
                    <div style={{backgroundColor: "#fff", marginRight: 50}}>
                        <div>
                            {
                                kw.map((tag) => {
                                        let style = {margin: 5}
                                        if (selectKw.includes(tag)) {
                                            style = {...style, ...{backgroundColor: "red"}}
                                        }
                                        return <Tag style={style} onClick={async () => {
                                            let rr = await event.search.search(`kw=${tag}`)
                                            let s_rr = []
                                            rr.data.result.map(temp => {
                                                s_rr.push({
                                                    title: temp.title,
                                                    summary: temp.content,
                                                    url: temp.article_url
                                                })
                                            })
                                            setSubData(s_rr)
                                        }}>{tag}</Tag>
                                    }
                                )
                            }
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    {subData.map((item) => {
                        return (
                            <Card style={{marginRight: 50}}>
                                <Row>
                                    <Space direction={"vertical"}>
                                        <a href={item.url}
                                           target={"_blank"}>{item.title.replaceAll('<b>', '').replaceAll('</b>', '')}</a>
                                        <div>{item.summary.substr(0, 200)}</div>
                                    </Space>
                                </Row>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}

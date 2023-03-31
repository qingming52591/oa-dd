import React from "react"
import {Row, Col, Form, Input, Button} from "antd";
import * as event from '../event'
import {Layout} from "antd/lib/index";
const {Header, Content, Sider, Footer} = Layout

const Login = (props) => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <Layout style={{minHeight: '100vh'}}>
        <Row type="flex" justify="center" align="middle" style={{minHeight: '90vh'}}>
            <Form {...layout} name="basic" onFinish={event.user.onLogin}>
                <Form.Item label="团队账户" name="team">
                    <Input defaultValue={'pyth.world'}/>
                </Form.Item>
                <Form.Item label="用户名" name="username"
                           rules={[{required: true, message: 'Please input your username!'}]}>
                    <Input/>
                </Form.Item>

                <Form.Item label="密码" name="password"
                           rules={[{required: true, message: 'Please input your password!'}]}>
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form.Item>

            </Form>

        </Row>
            <Layout style={{minHeight: '10vh'}}>
                <Footer style={{textAlign: 'center',color:'#C0BDBD'}}>版权所有 © pyth.world </Footer>
            </Layout>
        </Layout>
    )
};

export default Login



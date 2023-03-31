import 'antd/dist/antd.css'
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from "react"
import {store} from "../store";
import {Col, Layout, Menu, Row,Button} from 'antd';
import * as event from '../event'
import {Route, Switch, Link} from "react-router-dom";
import * as comps from '../comp/content'
import * as g from '../g'
import config from "../conf";
import * as util from '../util'

const {SubMenu} = Menu
const {Header, Content, Sider, Footer} = Layout
const Home = (props) => {
    const state = store.useContext();
    React.useEffect(() => {
        const getMune = async () => {
            await event.menu.getMenu({user: true})
        }
        getMune()
    }, [])
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider theme="light" collapsible collapsed={state.page.home.collapsed} onCollapse={event.home.onCollapse}>
                <Row justify={"center"}>
                    <h3 style={{marginTop: '20px'}}>{config.TITLE}</h3>
                </Row>
                <Menu mode="inline">
                    {state.user.menu.user_menu.map((item) => {
                        let t = item
                        if (item.type === g.menu.MENU) {
                            t = (<SubMenu key={item._id} icon={<UserOutlined/>} title={item.name}>
                                {
                                    item.children.map(child => {
                                        if (child.jump === g.menu_jump.outer) {
                                            return (<Menu.Item key={child._id} icon={<PieChartOutlined/>}>
                                                <a href={child.path} target={"_blank"}
                                                   rel="noopener noreferrer">{child.name}</a>
                                            </Menu.Item>)
                                        } else if (child.jump === g.menu_jump.app) {
                                            return (<Menu.Item key={child._id}>
                                                <Link to={child.path + `/${child.app_id}`}>{child.name}</Link>
                                            </Menu.Item>)
                                        } else {
                                            return (<Menu.Item key={child._id}>
                                                <Link to={child.path}>{child.name}</Link>
                                            </Menu.Item>)
                                        }
                                    })}
                            </SubMenu>)
                        } else if (item.type === g.menu.MENU_ITEM) {
                            if (item.jump === g.menu_jump.outer) {
                                t = (<Menu.Item key={item._id} icon={<PieChartOutlined/>}>
                                    <a href={item.path} target={"_blank"} rel="noopener noreferrer">{item.name}</a>
                                </Menu.Item>)
                            } else if (item.jump === g.menu_jump.app) {
                                t = (<Menu.Item key={item._id}>
                                    <Link to={item.path + `/${item.app_id}`}>{item.name}</Link>
                                </Menu.Item>)
                            } else {
                                t = (<Menu.Item key={item._id}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Menu.Item>)
                            }
                        }
                        return t
                    })}
                </Menu>
            </Sider>
            <Layout style={{minHeight: '100vh'}}>
                 <Header style={{backgroundColor: "white"}}>
                    <div style={{display: 'flex',flexDirection:'row',justifyContent: 'flex-end',alignItems: 'center',width:'100%',height:'100%'}} >
                        <Button type="primary" onClick={event.user.loginOut}>退出</Button>
                    </div>
                </Header>
                <Content style={{margin: '0 0px'}}>
                    <div className="site-layout-background" style={{padding: 1, minHeight: 360}}>
                        <Switch>
                            <Route exact key={"write_note"} path={'/note/write'}
                                   component={comps.default['EditTakeNotes']}/>
                            {state.user.menu.user_menu.map(item => {
                                let t = item
                                if (item.children.length > 0) {
                                    t = item.children.map(child => {
                                        let tt = item
                                        if (child.jump === g.menu_jump.app) {
                                            tt = <Route exact key={child._id} path={`${child.path}/:app_id`}
                                                        component={comps.default[child.comp]}/>
                                        } else if (child.jump === g.menu_jump.comp) {
                                            tt = <Route exact key={child._id} path={child.path}
                                                        component={comps.default[child.comp]}/>
                                        } else {
                                            tt = <Route/>
                                        }
                                        return tt
                                    })
                                } else {
                                    if (item.jump === g.menu_jump.app) {
                                        t = <Route exact key={item._id} path={`${item.path}/:app_id`}
                                                   component={comps.default[item.comp]}/>
                                    } else if (item.jump === g.menu_jump.comp) {
                                        t = <Route exact key={item._id} path={item.path}
                                                   component={comps.default[item.comp]}/>
                                    } else {
                                        t = <Route/>
                                    }
                                }
                                return t
                            })}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}></Footer>
            </Layout>
        </Layout>
    )
};

export default Home;

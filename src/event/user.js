import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import * as g from '../g'
import * as util from '../util'
import qs from 'qs'

// 登录
export const onLogin = async (formData) => {
    const state = store.getState()
    const md5 = require('md5')
    if (!state.user.info.token) {
        let token = window.sessionStorage.getItem(g.user.TOKEN)
        if (!token) {
            if (formData) {
                let r = await axios.post(`${config.API_OA_BASE}/v1/user/login`, {
                    ...formData,
                    ...{"password": md5(formData.password)}
                })
                http.getHttpHeardData(r)
            }
        } else {
            store.dispatch({type: actions.user.info.UPDATE_TOKEN, token: token})
        }
    }
}
// 退出登录
export const loginOut = async (formData) => {
     window.sessionStorage.removeItem(g.user.TOKEN)
     window.location.reload()
}

export const getUser = async (user = false) => {
    const state = store.getState()
    if (user) {

    } else {
        let r = await axios.get(`${config.API_OA_BASE}/v1/user/setting/list`, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            store.dispatch({type: actions.setting.user.UPDATE_SETTING_USER, user: data.data.users})
        }
    }
}
export const getGroupUser = async (group_id) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/user/setting/group?group_id=${group_id}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        return data.data.users
    }
}

export const saveUser = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_OA_BASE}/v1/user/setting/save`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getUser()
        return true
    }
}

export const password = async (formData) => {
    const state = store.getState()
    let push_data = {...formData, ...{pwd: util.getMd5(formData.pwd)}}
    let r = await axios.post(`${config.API_OA_BASE}/v1/user/setting/pwd`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        return true
    }
}

export const deleteUser = async (uid) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/user/setting/delete`, qs.stringify({uid}), {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getUser()
        return true
    }
}

// 获取用户订阅的主题
export const getUserTopic = async () => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/user/follow/topic`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        return data.data.topics
    }
}
// 设置用户订阅的主题
export const setUserTopic = async (opt, topic_id) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/user/follow/topic`, {opt, topic_id}, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        return true
    }
}

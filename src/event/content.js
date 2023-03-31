import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import qs from 'qs'
import * as event from '../event'
import * as util from '../util'
import * as g from '../g'


// 获取content
export const getContent = async (pagination, topic = '', type = '') => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/contents/list?page_num=${pagination.current}&page_size=${pagination.pageSize}&topic=${topic}&type=${type}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.user.content.UPDATE_CONTENTS, contents: data.data.contents})
        return {current: data.data.page_num, pageSize: data.data.page_size, total: data.data.total}
    }
}

// 获取 topic content
export const getTopicContent = async (pagination, topic = []) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/contents/topic/list?page_num=${pagination.current}&page_size=${pagination.pageSize}`,
        {topic}, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.user.content.UPDATE_CONTENTS, contents: data.data.contents})
        return {current: data.data.page_num, pageSize: data.data.page_size, total: data.data.total}
    }
}

// 保存content
export const saveContent = async (type, _data, topic = [], pagination = null) => {
    const state = store.getState()
    let formData = new FormData()
    formData.append('type', type)
    formData.append('data', _data)
    formData.append('topic', topic)


    let r = await axios.post(`${config.API_OA_BASE}/v1/contents/save`, formData, {
        headers: {
            token: state.user.info.token,
            'Content-Type': 'multipart/form-data'
        }
    })
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        if (pagination) {
            await getContent(pagination)
        }
        return true
    }
}

// 更新content字段对应的值
export const updateContent = async (_id, fields, value) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/contents/update`, {
        _id,
        fields,
        data: value
    }, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.user.content.UPDATE_FIELDS, _id: _id, fields, data: value})
        return true
    }
}

// 删除
export const deleteContent = async (_id, pagination) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/contents/delete?_id=${_id}`, {}, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getContent(pagination)
        return true
    }
}


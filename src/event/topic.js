import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import qs from 'qs'
import * as util from '../util'


export const deleteTopic = async (_id, pagination) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/topic/delete`, qs.stringify({_id}), {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getTopic(pagination)
        return true
    }

}

export const saveTopic = async (formData, pagination) => {
    try {
        const state = store.getState()
        let r = await axios.post(`${config.API_OA_BASE}/v1/topic/save`, {...formData}, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            await getTopic(pagination)
            return true
        }
    } catch (e) {
        util.log(e, true)
    }
}

export const getTopic = async (pagination, all = false) => {
    const state = store.getState()
    let r = {}
    if (all) {
        r = await axios.get(`${config.API_OA_BASE}/v1/topic/list?page_num=${pagination.current}&page_size=${pagination.pageSize}&all=1`, {headers: {token: state.user.info.token}})
    } else {
        r = await axios.get(`${config.API_OA_BASE}/v1/topic/list?page_num=${pagination.current}&page_size=${pagination.pageSize}`, {headers: {token: state.user.info.token}})
    }

    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.topic.topic.UPDATE_TOPIC, topic: data.data.topics})
        return {current: data.data.page_num, pageSize: data.data.page_size, total: data.data.total}
    }
}

export const getTopicContent = async (topic_id, pagination) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/topic/content?page_num=${pagination.current}&page_size=${pagination.pageSize}&topic_id=${topic_id}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.user.content.UPDATE_CONTENTS, contents: data.data.contents})
        return {current: data.data.page_num, pageSize: data.data.page_size, total: data.data.total}
    }
}

export const saveTopicUrl = async (_id, urls, source_type, pagination) => {
    try {
        const state = store.getState()
        let formData = new FormData()
        formData.append('_id', _id)
        formData.append('data', JSON.stringify(urls))
        formData.append('source_type', source_type)
        let r = await axios.post(`${config.API_OA_BASE}/v1/topic/source`, formData, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            await getTopic(pagination)
            return true
        }
    } catch (e) {
        util.log(e, true)
    }
}

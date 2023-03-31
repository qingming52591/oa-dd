import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";


// 获取content
export const getQa = async (pagination) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/qa/list?page_num=${pagination.current}&page_size=${pagination.pageSize}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.qa.UPDATE_QAS, qas: data.data.qas})
        return {current: data.data.page_num, pageSize: data.data.page_size, total: data.data.total}
    }
}

// 保存
export const saveQa = async (_data, pagination) => {
    const state = store.getState()

    let r = await axios.post(`${config.API_OA_BASE}/v1/qa/save`, _data, {
        headers: {
            token: state.user.info.token
        }
    })
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        if (pagination) {
            await getQa(pagination)
        }
        return true
    }
}

// 更新content字段对应的值
export const updateQa = async (_id, fields, value) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/qa/update`, {
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
export const deleteQa = async (_id, pagination) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/qa/delete?_id=${_id}`, {}, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getQa(pagination)
        return true
    }
}


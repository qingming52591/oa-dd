import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import * as g from '../g'
import * as util from '../util'
import qs from 'qs'
import {getUser} from "./user";

export const getVideo = async () => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/video/list`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.page.video.UPDATE, video: data.data.video})
    }
}

export const saveVideo = async (formData) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/video/save`, formData,
        {headers: {token: state.user.info.token, 'Content-Type': 'multipart/form-data'}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getVideo()
        return true
    }
}


export const updateVideo = async (_id, fields, value) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/video/update`, {
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
export const deleteVideo = async (_id,) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/video/delete?_id=${_id}`, {}, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getVideo()
        return true
    }
}
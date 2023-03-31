import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import qs from 'qs'
import * as event from '../event'
import * as util from '../util'


// 删除App
export const deleteApp = async (app_id) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/app/delete`, qs.stringify({app_id}), {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getApp()
        await event.menu.getMenu()
        await event.menu.getMenu({user: true})
        return true
    }

}

export const saveApp = async (formData) => {
    try {
        const state = store.getState()
        let push_data = {...formData}
        let r = await axios.post(`${config.API_OA_BASE}/v1/app/save`, push_data, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            await getApp()
            return true
        }
    } catch (e) {
        util.log(e, true)
    }
}

export const getApp = async () => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/app/list`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.setting.app.UPDATE_APP, app: data.data.app})
    }
}

export const getAppById = async (app_id) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/app/${app_id}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        return data.data
    }
}


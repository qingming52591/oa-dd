import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import qs from 'qs'
import * as event from '../event'
import * as util from '../util'
import * as g from '../g'


// 获取site spider
export const getSiteSpider = async (pagination) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/spider/site/list?page_num=${pagination.current}&page_size=${pagination.pageSize}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.spider.site.UPDATE_SITE, site: data.data.feeds})
        return {current: data.data.page_num, pageSize: data.data.page_size, total: data.data.total}
    }
}
// 保存content
export const saveSiteSpider = async (_data, pagination) => {
    const state = store.getState()


    let r = await axios.post(`${config.API_OA_BASE}/v1/spider/site/save`, {..._data}, {
        headers: {
            token: state.user.info.token
        }
    })
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getSiteSpider(pagination)
        return true
    }

}
// 开始抓取
export const emit = async (_data, pagination) => {
    const state = store.getState()


    let r = await axios.post(`${config.API_OA_BASE}/v1/spider/site/emit`, {..._data}, {
        headers: {
            token: state.user.info.token
        }
    })
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getSiteSpider(pagination)
        return true
    }

}
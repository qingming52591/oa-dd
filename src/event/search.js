import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import * as g from '../g'
import * as util from '../util'
import qs from 'qs'

// 登录
export const search = async (query) => {
    const state = store.getState()
    let r = await axios.get(`https://manager.haxitag.com/server/search?${query}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r, false)
    if (headers && data) {
        return data
    }
}

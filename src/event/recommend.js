import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";


export const getRecommend = async (pagination) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/recommend/list?page_num=${pagination.current}&page_size=${pagination.pageSize}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.user.recommend.UPDATE_RECOMMEND, recommend: data.data.recommend})
        return {current: data.data.page_num, pageSize: data.data.page_size, total: data.data.total}
    }
}
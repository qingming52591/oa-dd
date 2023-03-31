import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import qs from 'qs'

// 创建& 编辑 菜单
export const createMenu = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_OA_BASE}/v1/menu/save`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getMenu()
        await getMenu({user: true})
        return true
    }
}

// 删除菜单
export const deleteMenu = async (menu_id) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/menu/delete`, qs.stringify({menu_id}), {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getMenu()
        await getMenu({user: true})
        return true
    }

}
// 组织菜单
const buildMenu = (menu_data) => {
    let parents = {}
    let chidren = {}
    menu_data.map((item) => {
       if (item._id == '6425690367a7f42766c7e985') {
            item.comp = 'SettingUser'
        } 
       if (!item.parent_id) {
            item['children'] = []
            parents[item._id] = item
        } else {
            chidren[item._id] = item
        }
        return item
    })
    Object.values(chidren).filter(item => item.parent_id in parents).map((item) =>
        parents[item.parent_id].children.push(item))
    return Object.values(parents)
}

// 获取菜单
/*参数user 标识获取用户菜单*/
export const getMenu = async (user = false) => {
    const state = store.getState()
    if (user) {
        let r = await axios.get(`${config.API_OA_BASE}/v1/user/menu`, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            let user_menu = buildMenu(data.data.menu)
            store.dispatch({type: actions.user.menu.UPDATE_USER_MENU, user_menu: user_menu})
        }
    } else {
        let r = await axios.get(`${config.API_OA_BASE}/v1/menu/list`, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            store.dispatch({type: actions.setting.menu.UPDATE_MENU, menu: data.data.menu})
        }
    }
}

// 获取菜单组
export const getMenuGroup = async () => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/menu/group/list`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.setting.menu_group.UPDATE_MENU_GROUP, menu_group: data.data.menu_group})
    }
}

// 创建、修改菜单组
export const createMenuGroup = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_OA_BASE}/v1/menu/group/save`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getMenuGroup()
        return true
    }
}

// 更新菜单组字段
export const menuGroupUpdate = async (_id, fields, value) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/menu/group/update`, {
        _id,
        fields,
        data: value
    }, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.setting.menu_group.UPDATE_FIELDS, _id: _id, fields, data: value})
        return true
    }
}

// 删除菜单组
export const deleteMenuGroup = async (menu_group_id) => {
    const state = store.getState()
    let r = await axios.post(`${config.API_OA_BASE}/v1/menu/group/delete`, qs.stringify({menu_group_id}), {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getMenuGroup()
        return true
    }
}


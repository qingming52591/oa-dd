import {store, actions} from "../store";
// 折叠sider 导航
export const onCollapse = async () => {
    store.dispatch({type: actions.page.home.FLEX_SIDER})
}
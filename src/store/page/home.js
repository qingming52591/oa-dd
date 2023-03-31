import produce from "immer";

// initState
export const state = {
    collapsed: false
}

// action
export const action = {
    // 伸缩侧导航
    FLEX_SIDER: "FLEX_SIDER"
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.FLEX_SIDER:
            return produce(state, (draft) => {
                draft.home.collapsed = state.home.collapsed ? false : true
            })
        default:
            return state

    }
}
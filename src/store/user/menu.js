import produce from "immer";

// initState
export const state = {
    user_menu: []
}

// action
export const action = {
    // 更新用户token
    UPDATE_USER_MENU: 'UPDATE_USER_MENU'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_USER_MENU:
            let newState = produce(state, (draft) => {
                draft.user_menu = nowAction.user_menu
            })
            return newState
        default:
            return state
    }
}
import produce from "immer";
import * as g from "../../g";

// initState
export const state = {
    token: ''
}

// action
export const action = {
    // 更新用户token
    UPDATE_TOKEN: 'UPDATE_TOKEN'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_TOKEN:
            window.sessionStorage.setItem(g.user.TOKEN, nowAction.token)
            let newState = produce(state, (draft) => {
                draft.token = nowAction.token
            })
            return newState
        default:
            return state
    }
}
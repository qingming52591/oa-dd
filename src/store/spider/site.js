import produce from "immer";

// initState
export const state = {
    site: []
}

// action
export const action = {
    // 更新用户token
    UPDATE_SITE: 'UPDATE_SITE'
}

// reduce
export const reducer = (state, nowAction) => {
    let newState = null
    switch (nowAction.type) {
        case action.UPDATE_SITE:
            newState = produce(state, (draft) => {
                draft.site = nowAction.site
            })
            return newState
        default:
            return state
    }
}
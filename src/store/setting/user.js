import produce from "immer";

// initState
export const state = {
    user: []
}

// action
export const action = {
    UPDATE_SETTING_USER: 'UPDATE_SETTING_USER'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_SETTING_USER:
            let newState = produce(state, (draft) => {
                draft.user = nowAction.user
            })
            return newState
        default:
            return state
    }
}

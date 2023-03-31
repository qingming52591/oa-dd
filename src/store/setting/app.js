import produce from "immer";

// initState
export const state = {
    app: []
}

// action
export const action = {
    UPDATE_APP: 'UPDATE_APP'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_APP:
            let newState = produce(state, (draft) => {
                draft.app = nowAction.app
            })
            return newState
        default:
            return state
    }
}

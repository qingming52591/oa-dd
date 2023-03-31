import produce from "immer";
import * as g from "../../g";

// initState
export const state = {
    recommend: []
}

// action
export const action = {
    UPDATE_RECOMMEND: 'UPDATE_RECOMMEND'
}

// reduce
export const reducer = (state, nowAction) => {
    let newState = null
    switch (nowAction.type) {
        case action.UPDATE_RECOMMEND:
            newState = produce(state, (draft) => {
                draft.recommend = nowAction.recommend
            })
            return newState
        default:
            return state
    }
}
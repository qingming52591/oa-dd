import produce from "immer";
import * as g from "../../g";

// initState
export const state = {
    contents: []
}

// action
export const action = {
    // 更新用户token
    UPDATE_CONTENTS: 'UPDATE_CONTENTS',
    UPDATE_FIELDS: 'UPDATE_FIELDS'
}

// reduce
export const reducer = (state, nowAction) => {
    let newState = null
    switch (nowAction.type) {
        case action.UPDATE_CONTENTS:
            newState = produce(state, (draft) => {
                draft.contents = nowAction.contents
            })
            return newState
        case action.UPDATE_FIELDS:
            newState = produce(state, (draft) => {
                draft.contents = draft.contents.map(item => {
                    if (item._id === nowAction._id) {
                        item = {...item, ...{[nowAction.fields]: nowAction.data}}
                    }
                    return item
                })
            })
            return newState
        default:
            return state
    }
}
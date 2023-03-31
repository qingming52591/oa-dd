import produce from "immer";

// initState
export const state = {
    qas: []
}

// action
export const action = {
    // 更新用户token
    UPDATE_QAS: 'UPDATE_QAS',
    UPDATE_FIELDS: 'UPDATE_FIELDS'
}

// reduce
export const reducer = (state, nowAction) => {
    let newState = null
    switch (nowAction.type) {
        case action.UPDATE_QAS:
            newState = produce(state, (draft) => {
                draft.qas = nowAction.qas
            })
            return newState
        case action.UPDATE_FIELDS:
            newState = produce(state, (draft) => {
                draft.qas = draft.qas.map(item => {
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
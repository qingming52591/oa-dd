import produce from "immer";

// initState
export const state = {
    topic: []
}

// action
export const action = {
    UPDATE_TOPIC: 'UPDATE_TOPIC'
}

// reduce
export const reducer = (state, nowAction) => {
    let newState = null
    switch (nowAction.type) {
        case action.UPDATE_TOPIC:
            newState = produce(state, (draft) => {
                draft.topic = nowAction.topic
            })
            return newState
        default:
            return state
    }
}
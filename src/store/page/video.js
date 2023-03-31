import produce from "immer";

// initState
export const state = {
    video: []
}

// action
export const action = {
    // 伸缩侧导航
    UPDATE: "UPDATE",
    UPDATE_FIELDS: 'UPDATE_FIELDS'
}

// reduce
export const reducer = (state, nowAction) => {
    let newState = null
    switch (nowAction.type) {
        case action.UPDATE:
            return produce(state, (draft) => {
                draft.video = nowAction.video
            })
        case action.UPDATE_FIELDS:
            newState = produce(state, (draft) => {
                draft.video = draft.video.map(item => {
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
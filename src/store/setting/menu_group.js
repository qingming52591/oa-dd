import produce from "immer";

// initState
export const state = {
    menu_group: []
}

// action
export const action = {
    UPDATE_MENU_GROUP: 'UPDATE_MENU_GROUP',
    UPDATE_FIELDS: 'UPDATE_FIELDS'
}

// reduce
export const reducer = (state, nowAction) => {
    let newState = null
    switch (nowAction.type) {
        case action.UPDATE_MENU_GROUP:
            newState = produce(state, (draft) => {
                draft.menu_group = nowAction.menu_group
            })
            return newState
        case action.UPDATE_FIELDS:
            newState = produce(state, (draft) => {
                draft.menu_group = draft.menu_group.map(item => {
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

import produce from "immer";

// initState
export const state = {
    menu: []
}

// action
export const action = {
    UPDATE_MENU: 'UPDATE_MENU'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_MENU:
            let newState = produce(state, (draft) => {
                draft.menu = nowAction.menu
            })
            return newState
        default:
            return state
    }
}

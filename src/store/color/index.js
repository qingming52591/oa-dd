import produce from "immer";

// initState
export const color = {
    color: 'red'
}

// action
export const UPDATE_COLOR = "UPDATE_COLOR"

// reduce
export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return produce(state, (draft) => {
                draft.color = action.color
            })
        default:
            return state
    }
}
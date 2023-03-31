import * as topic from "./topic";
import combineReducers from '../../util/redux/combineReducers'

// initState
export const state = {
    topic: topic.state
}
// action
export const action = {
    topic: topic.action
}
// reduce
export const reducer = combineReducers({
    topic: topic.reducer
})
import * as site from "./site";
import combineReducers from '../../util/redux/combineReducers'

// initState
export const state = {
    site: site.state
}
// action
export const action = {
    site: site.action
}
// reduce
export const reducer = combineReducers({
    site: site.reducer
})
import * as info from './info'
import * as menu from './menu'
import * as content from "./content";
import * as recommend from "./recommend"
import combineReducers from '../../util/redux/combineReducers'

// initState
export const state = {
    info: info.state,
    menu: menu.state,
    content: content.state,
    recommend: recommend.state
}
// action
export const action = {
    info: info.action,
    menu: menu.action,
    content: content.action,
    recommend: recommend.action
}
// reduce
export const reducer = combineReducers({
    info: info.reducer,
    menu: menu.reducer,
    content: content.reducer,
    recommend: recommend.reducer
})
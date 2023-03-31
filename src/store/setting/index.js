import * as menu from './menu'
import * as app from './app'
import * as menu_group from './menu_group'
import * as user from './user'
import combineReducers from '../../util/redux/combineReducers'

// initState
export const state = {
    menu: menu.state,
    app: app.state,
    menu_group: menu_group.state,
    user: user.state
}
// action
export const action = {
    menu: menu.action,
    app: app.action,
    menu_group: menu_group.action,
    user: user.action
}
// reduce
export const reducer = combineReducers({
    menu: menu.reducer,
    app: app.reducer,
    menu_group: menu_group.reducer,
    user: user.reducer
})
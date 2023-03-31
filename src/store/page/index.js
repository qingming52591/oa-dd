import * as home from './home'
import * as video from './video'
import combineReducers from '../../util/redux/combineReducers'
// initState
export const state = {
    home: home.state,
    video: video.state
}
// action
export const action = {
    home: home.action,
    video: video.action
}
// reduce
export const reducer = combineReducers({
    home: home.reducer,
    video: video.reducer
})
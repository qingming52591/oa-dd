import {createStore, combineReducers} from '../util/redux'
import * as page from "./page"
import * as user from './user'
import * as setting from './setting'
import * as spider from './spider'
import * as topic from './topic'
import * as qa from './qa'

export const actions = {
    page: page.action,
    user: user.action,
    setting: setting.action,
    spider: spider.action,
    topic: topic.action,
    qa: qa.action
}

export const {store, Provider} = createStore(
    combineReducers({
        page: page.reducer,
        user: user.reducer,
        setting: setting.reducer,
        spider: spider.reducer,
        topic: topic.reducer,
        qa: qa.reducer
    }),
    {
        page: page.state,
        user: user.state,
        setting: setting.state,
        spider: spider.state,
        topic: topic.state,
        qa: qa.state
    }
)

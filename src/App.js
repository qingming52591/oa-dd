import React from 'react'
import Home from "./page/home";
import Login from "./page/login";
import {store} from "./store";
import * as event from './event/user'
import config from "./conf";


const App = (props) => {
    const state = store.useContext();

    React.useEffect(() => {
        document.title = config.TITLE
        const onLogin = async () => {
            await event.onLogin()
        }
        onLogin()
    }, [])

    if (!state.user.info.token) {
        return <Login/>
    } else {
        return <Home/>
    }
}
export default App
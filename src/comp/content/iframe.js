import React from 'react'
import Iframe from "react-iframe";
import * as event from '../../event'

export const IFrame = (props) => {
    const [app, setApp] = React.useState({_id: '', enter: '', name: ''})
    React.useEffect(() => {
        const getAppById = async () => {
            let data = await event.app.getAppById(props.match.params.app_id)
            if (data && data.app) {
                setApp(data.app)
            }
        }
        getAppById()
    }, [props.match.params.app_id])

    return (
        <div>
            <Iframe url={app.enter}
                    frameBorder={0}
                    position="absolute"
                    width={'100%'}
                    height={'100%'}
                    display="initial"
            />
        </div>
    )
}

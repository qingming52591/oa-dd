const getConfig = (env) => {
    let c = require(`./config.${env}.js`)
    return c.default
}
const config = getConfig(process.env.REACT_APP_ENV)
export default config
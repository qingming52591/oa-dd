const paths = require("./react-scripts/config/paths");
paths.appBuild = require('path').join(require('path').dirname(paths.appBuild), "test");
const CracoLessPlugin = require('craco-less');
const g = require('./env')

module.exports = {
    reactScriptsVersion: require('path').resolve(__dirname, 'react-scripts'),
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            let outPath = ''
            outPath = require('path').resolve(__dirname, `${g.appBuild()}`)
            webpackConfig.output = {
                ...webpackConfig.output, ...{
                    path: outPath
                }
            }
            return webpackConfig
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#1DA57A'},
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ],
};
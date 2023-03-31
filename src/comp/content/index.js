// 动态引入的module 不可重名
let contents = {}
let files = require.context('.', false, /\.js$/)
files.keys().forEach(key => {
    if (key === './index.js') return
    contents = {...contents, ...files(key)}
})
console.log(contents)
export default contents


// 基础路径 注意发布之前要先修改这里
let publicPath = '/'

module.exports = {
    publicPath, // 根据你的实际情况更改这里
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.symlinks(true);
    },
    devServer: {
    publicPath // 和 publicPath 保持一致
    },
    css: {
    },
}

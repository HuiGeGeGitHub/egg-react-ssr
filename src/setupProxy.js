const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    // 本地代理
    app.use(
        proxy("/api", {
            target: "http://47.97.7.80",
            changeOrigin: true
        })
    )
}

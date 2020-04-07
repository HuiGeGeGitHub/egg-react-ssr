const path = require("path")
const server = require("koa-static")
const Router = require('koa-router')
const Koa = require("koa")
const app = new Koa()
const router = new Router()
const chalk = require('chalk')
const ReactDom = require('react-dom/server')
// 1.主页静态网页 把静态页统一放到public中管理
app.use(server(path.join(__dirname, 'public')))
// const content = ReactDom.renderToString(<Login />)
router.get("*", async ctx => {
    if (ctx.url.indexOf('/api/') > -1) {
        await next()
        return
    }
    // 将 context 数据渲染为 HTML
    // const html = await renderToString(context);
    ctx.response.type='html';
    ctx.body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>React SSR</title>
        </head>
        <body>
            <div id="app">
                ${content}
            </div>
        </body>
        </html>
    `
})
app.use(router.routes())
console.log(chalk.blue.bgWhite(`page begin:
    http://localhost:5088
`))
app.listen(5088, "0.0.0.0")

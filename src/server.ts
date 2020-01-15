import Koa, { Context, Next } from 'koa'
import Router from 'koa-router'

import bodyparser from 'koa-bodyparser'
import cors from 'koa2-cors'

import { PORT } from './config'

const app = new Koa()
const routes = new Router()

routes.get('/', async (context: Context, next: Next) => {
    context.status = 200
    return next()
})

app.use(cors())
app.use(bodyparser())
app.use(routes.routes())
app.use(routes.allowedMethods())

app.listen(PORT)

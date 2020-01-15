import { Context, Next } from 'koa'
import Router from 'koa-router'

const routes = new Router()

routes.get('/', async (context: Context, next: Next) => {
    context.status = 200
    return next()
})

export default routes

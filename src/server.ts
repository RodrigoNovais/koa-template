import Koa from 'koa'

import bodyparser from 'koa-bodyparser'
import cors from 'koa2-cors'
import helmet from 'koa-helmet'

import routes from './routes'
import { PORT } from './config'

const app = new Koa()

app.use(cors())
app.use(helmet())
app.use(bodyparser())

app.use(routes)

app.listen(PORT)

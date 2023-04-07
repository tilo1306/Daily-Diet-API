import cookie from '@fastify/cookie'
import fastify from 'fastify'

import { meatsRoutes } from './routes/meatsRoutes.routes'
import { usersRoutes } from './routes/usersRoutes.routes'

export const app = fastify()

app.register(cookie)
app.register(usersRoutes, { prefix: '/user' })
app.register(meatsRoutes, { prefix: '/meat' })

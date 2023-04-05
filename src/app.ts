import cookie from '@fastify/cookie'
import fastify from 'fastify'

import { usersRoutes } from './routes/usersRoutes.routes'

export const app = fastify()

app.register(cookie)
app.register(usersRoutes, { prefix: '/user' })

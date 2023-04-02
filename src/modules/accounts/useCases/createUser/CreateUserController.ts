import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateUserUserCase } from '../factories/makeCreateUserUseCase'

export class CreateUserController {
  handler(request: FastifyRequest, reply: FastifyReply) {
    const createTransactionBodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6)
    })

    const { email, password } = createTransactionBodySchema.parse(request.body)

    const createUserUseCase = makeCreateUserUserCase()

    createUserUseCase.execute({ email, password })

    reply.status(201).send()
  }
}

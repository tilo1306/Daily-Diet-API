import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { UserAlreadyExistsError } from '../errors/userAlreadyExistsError'
import { makeCreateUserUserCase } from '../factories/makeCreateUserUseCase'

export class CreateUserController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const createTransactionBodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6)
    })

    const { email, password } = createTransactionBodySchema.parse(request.body)

    try {
      const createUserUseCase = makeCreateUserUserCase()

      const newUserId = await createUserUseCase.execute({ email, password })

      let { userId } = request.cookies

      if (!userId) {
        userId = newUserId

        reply.cookie('userId', userId, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 7 // 7days
        })
      }
    } catch (err) {
      if (err instanceof UserAlreadyExistsError) {
        return reply.status(409).send({ message: err.message })
      }
      throw err
    }

    return reply.status(201).send()
  }
}

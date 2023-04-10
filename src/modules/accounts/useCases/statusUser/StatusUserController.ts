import { FastifyReply, FastifyRequest } from 'fastify'

import { makeStatusUserUserCase } from '../factories/makeStatusUserUserCase'

export class StatusUserController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = request.cookies

    const statusUserUseCase = makeStatusUserUserCase()

    const status = await statusUserUseCase.execute(userId as string)

    reply.send(status)
  }
}

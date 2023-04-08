import { FastifyRequest, FastifyReply } from 'fastify'

import { makeListMeatsUseCase } from '../factories/makeListMeatsUseCase'

export class ListMeatsController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = request.cookies

    const listMeatsUseCase = makeListMeatsUseCase()

    const listMeats = await listMeatsUseCase.execute(userId as string)

    reply.send(listMeats)
  }
}

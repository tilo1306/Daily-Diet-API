/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyRequest, FastifyReply } from 'fastify'

import { makeFindMeatUseCase } from '../factories/makeFindMeatUseCase'

export class FindMeatController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = request.cookies
    const { id } = request.params as string | any

    const findMeatUseCase = makeFindMeatUseCase()

    const findMeat = await findMeatUseCase.execute(id, userId as string)

    reply.send(findMeat)
  }
}

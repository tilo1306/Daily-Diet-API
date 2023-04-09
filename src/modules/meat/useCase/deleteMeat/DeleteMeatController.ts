/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'

import { makeDeleteMeatUseCase } from '../factories/makeDeleteMeatUseCase'

export class DeleteMeatController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = request.cookies
    const { id } = request.params as string | any

    const deleteMeatUseCase = makeDeleteMeatUseCase()

    await deleteMeatUseCase.execute(id, userId as string)

    reply.send()
  }
}

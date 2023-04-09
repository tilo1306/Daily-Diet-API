/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateMeatUseCase } from '../factories/makeUpdateMeatUseCase'

export class UpdateMeatController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const createMeatBodySchema = z.object({
      date_and_hour: z.string(),
      description: z.string(),
      isFitness: z.boolean(),
      name: z.string()
    })
    const { date_and_hour, description, isFitness, name } =
      createMeatBodySchema.parse(request.body)

    const { userId } = request.cookies as string | any
    const { id } = request.params as string | any

    const updateMeatUseCase = makeUpdateMeatUseCase()

    const updateMeat = await updateMeatUseCase.execute({
      date_and_hour,
      description,
      isFitness,
      name,
      userId,
      id
    })

    reply.send(updateMeat)
  }
}

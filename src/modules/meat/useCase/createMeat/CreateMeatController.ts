/* eslint-disable no-useless-catch */
import { strict } from 'assert'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { makeCreateMeatUseCase } from '../factories/makeCreateMeatUseCase'

export class CreateMeatController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    const createMeatBodySchema = z.object({
      date_and_hour: z.date(),
      description: z.string(),
      isFitness: z.boolean(),
      name: z.string()
    })
    const { date_and_hour, description, isFitness, name } =
      createMeatBodySchema.parse(request.body)

    const { userId } = request.cookies as any
    try {
      const createMeatUseCase = makeCreateMeatUseCase()
      const newMeat = await createMeatUseCase.execute({
        date_and_hour,
        description,
        isFitness,
        name,
        userId
      })

      return reply.status(201).send(newMeat)
    } catch (error) {
      throw error
    }
  }
}

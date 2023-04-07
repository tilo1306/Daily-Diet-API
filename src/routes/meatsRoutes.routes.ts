import { checkUserIdExists } from '@/middlewares/check-user-id-exists'
import { CreateMeatController } from '@/modules/meat/useCase/createMeat/CreateMeatController'
import { FastifyInstance } from 'fastify'

const createMeatController = new CreateMeatController()

export async function meatsRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: checkUserIdExists }, createMeatController.handler)
}

import { checkUserIdExists } from '@/middlewares/check-user-id-exists'
import { CreateMeatController } from '@/modules/meat/useCase/createMeat/CreateMeatController'
import { ListMeatsController } from '@/modules/meat/useCase/listMeats/ListMeatsController'
import { FastifyInstance } from 'fastify'

const createMeatController = new CreateMeatController()
const listMeatsController = new ListMeatsController()

export async function meatsRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: checkUserIdExists }, createMeatController.handler)
  app.get('/', { preHandler: checkUserIdExists }, listMeatsController.handler)
}

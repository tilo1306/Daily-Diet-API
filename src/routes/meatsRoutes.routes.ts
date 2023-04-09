import { checkUserIdExists } from '@/middlewares/check-user-id-exists'
import { CreateMeatController } from '@/modules/meat/useCase/createMeat/CreateMeatController'
import { FindMeatController } from '@/modules/meat/useCase/findMeat/FindMeatController'
import { ListMeatsController } from '@/modules/meat/useCase/listMeats/ListMeatsController'
import { UpdateMeatController } from '@/modules/meat/useCase/updateMeat/UpdateMeatController'
import { FastifyInstance } from 'fastify'

const createMeatController = new CreateMeatController()
const listMeatsController = new ListMeatsController()
const findMeatController = new FindMeatController()
const updateMeatController = new UpdateMeatController()

export async function meatsRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: checkUserIdExists }, createMeatController.handler)
  app.get('/', { preHandler: checkUserIdExists }, listMeatsController.handler)
  app.get('/:id', { preHandler: checkUserIdExists }, findMeatController.handler)
  app.put(
    '/:id',
    { preHandler: checkUserIdExists },
    updateMeatController.handler
  )
}

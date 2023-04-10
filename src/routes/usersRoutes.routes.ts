import { checkUserIdExists } from '@/middlewares/check-user-id-exists'
import { CreateUserController } from '@/modules/accounts/useCases/createUser/CreateUserController'
import { StatusUserController } from '@/modules/accounts/useCases/statusUser/StatusUserController'
import { FastifyInstance } from 'fastify'

const createUserController = new CreateUserController()
const statusUserController = new StatusUserController()

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', createUserController.handler)
  app.get('/', { preHandler: checkUserIdExists }, statusUserController.handler)
}

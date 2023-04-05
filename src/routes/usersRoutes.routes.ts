import { CreateUserController } from '@/modules/accounts/useCases/createUser/CreateUserController'
import { FastifyInstance } from 'fastify'

const createUserController = new CreateUserController()
export async function usersRoutes(app: FastifyInstance) {
  app.post('/', createUserController.handler)
}

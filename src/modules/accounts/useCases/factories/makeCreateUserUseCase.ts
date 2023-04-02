import { UsersRepository } from '../../infra/knex/repositories/UsersRepository'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'

export function makeCreateUserUserCase() {
  const usersRepository = new UsersRepository()
  const createUserUseCase = new CreateUserUseCase(usersRepository)

  return createUserUseCase
}

import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { User } from '../infra/knex/entities/User'

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findEmail(email: string): Promise<User | undefined>
}

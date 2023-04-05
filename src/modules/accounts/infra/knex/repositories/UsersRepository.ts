import { knex } from '@/database/database'

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { User } from '../entities/User'

export class UsersRepository implements IUsersRepository {
  async create({ email, password, id }: ICreateUserDTO): Promise<void> {
    await knex('users').insert({
      id,
      email,
      password
    })
  }
  async findEmail(email: string): Promise<User | undefined> {
    const user = (await knex('users').where({ email }).first()) as
      | User
      | undefined
    return user
  }
}

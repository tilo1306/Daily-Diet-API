import { knex } from '@/database/database'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../repositories/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async create({ email, password }: ICreateUserDTO): Promise<void> {
    await knex('users').insert({
      email,
      password
    })
  }
}

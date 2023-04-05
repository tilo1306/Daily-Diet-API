import { hash } from 'bcryptjs'
import { v4 as uuidV4 } from 'uuid'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { UsersRepository } from '../../infra/knex/repositories/UsersRepository'
import { UserAlreadyExistsError } from '../errors/userAlreadyExistsError'

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({ email, password }: ICreateUserDTO): Promise<string> {
    const emailAlreadyExists = await this.usersRepository.findEmail(email)

    if (emailAlreadyExists) {
      throw new UserAlreadyExistsError()
    }
    const passwordHash = await hash(password, 6)

    const id = uuidV4()

    await this.usersRepository.create({
      id,
      email,
      password: passwordHash
    })

    return id
  }
}

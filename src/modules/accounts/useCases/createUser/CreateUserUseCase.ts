import { hash } from 'bcryptjs'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { UsersRepository } from '../../infra/knex/repositories/UsersRepository'

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({ email, password }: ICreateUserDTO): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findEmail(email)

    if (emailAlreadyExists) {
      throw new Error('Email already exists!')
    }
    const passwordHash = await hash(password, 6)

    await this.usersRepository.create({
      email,
      password: passwordHash
    })
  }
}

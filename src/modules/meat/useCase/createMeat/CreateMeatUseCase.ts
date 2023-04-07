import { v4 as uuidV4 } from 'uuid'

import { ICreateMeatDTO } from '../../dtos/ICreateMeatDTO'
import { Meat } from '../../infra/knex/entities/Meat'
import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'

export class CreateMeatUseCase {
  constructor(private meatsRepository: MeatsRepository) {}
  async execute({
    date_and_hour,
    description,
    isFitness,
    name,
    userId
  }: ICreateMeatDTO): Promise<Meat> {
    const id = uuidV4()

    const newMeat = await this.meatsRepository.create({
      id,
      description,
      date_and_hour,
      isFitness,
      name,
      userId
    })

    return newMeat
  }
}

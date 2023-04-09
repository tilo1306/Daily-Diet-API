import { ICreateMeatDTO } from '../../dtos/ICreateMeatDTO'
import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'

export class UpdateMeatUseCase {
  constructor(private meatsRepository: MeatsRepository) {}
  async execute({
    date_and_hour,
    description,
    id,
    isFitness,
    name,
    userId
  }: ICreateMeatDTO) {
    await this.meatsRepository.updateMeat({
      date_and_hour,
      description,
      id,
      isFitness,
      name,
      userId
    })

    const findMeat = this.meatsRepository.findMeat(id as string, userId)

    return findMeat
  }
}

import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'

export class FindMeatUseCase {
  constructor(private meatsRepository: MeatsRepository) {}
  async execute(id: string, userId: string) {
    const meat = await this.meatsRepository.findMeat(id, userId)

    return meat
  }
}

import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'

export class ListMeatsUseCase {
  constructor(private meatsRepository: MeatsRepository) {}
  async execute(userId: string) {
    const listmeats = await this.meatsRepository.listAllMeats(userId)

    return listmeats
  }
}

import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'

export class DeleteMeatUseCase {
  constructor(private meatsRepository: MeatsRepository) {}
  async execute(id: string, userId: string) {
    await this.meatsRepository.deleteMeat(id, userId)
  }
}

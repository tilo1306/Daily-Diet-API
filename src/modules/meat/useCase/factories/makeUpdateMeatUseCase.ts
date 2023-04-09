import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'
import { UpdateMeatUseCase } from '../updateMeat/UpdateMeatUseCase'

export function makeUpdateMeatUseCase() {
  const meatsRepository = new MeatsRepository()
  const updateMeatUseCase = new UpdateMeatUseCase(meatsRepository)

  return updateMeatUseCase
}

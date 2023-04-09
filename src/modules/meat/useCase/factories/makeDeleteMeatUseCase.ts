import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'
import { DeleteMeatUseCase } from '../deleteMeat/DeleteMeatUseCase'

export function makeDeleteMeatUseCase() {
  const meatsRepository = new MeatsRepository()
  const deleteMeatUseCase = new DeleteMeatUseCase(meatsRepository)

  return deleteMeatUseCase
}

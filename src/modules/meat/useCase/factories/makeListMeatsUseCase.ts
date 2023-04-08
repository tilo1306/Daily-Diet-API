import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'
import { ListMeatsUseCase } from '../listMeats/ListMeatsUseCase'

export function makeListMeatsUseCase() {
  const meatRepository = new MeatsRepository()
  const listMeatsUseCase = new ListMeatsUseCase(meatRepository)

  return listMeatsUseCase
}

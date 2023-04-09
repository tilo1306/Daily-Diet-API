import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'
import { FindMeatUseCase } from '../findMeat/FindMeatUseCase'

export function makeFindMeatUseCase() {
  const meatsRepository = new MeatsRepository()
  const findMeatUseCase = new FindMeatUseCase(meatsRepository)

  return findMeatUseCase
}

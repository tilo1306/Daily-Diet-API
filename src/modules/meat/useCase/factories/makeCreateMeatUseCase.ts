import { MeatsRepository } from '../../infra/knex/repositories/MeatsRepository'
import { CreateMeatUseCase } from '../createMeat/CreateMeatUseCase'

export function makeCreateMeatUseCase() {
  const meatRepository = new MeatsRepository()
  const createMeatUseCase = new CreateMeatUseCase(meatRepository)

  return createMeatUseCase
}

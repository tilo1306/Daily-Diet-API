import { MeatsRepository } from '@/modules/meat/infra/knex/repositories/MeatsRepository'

import { StatusUserUseCase } from '../statusUser/StatusUserUseCase'

export function makeStatusUserUserCase() {
  const meatsRepository = new MeatsRepository()
  const statusUserUseCase = new StatusUserUseCase(meatsRepository)

  return statusUserUseCase
}

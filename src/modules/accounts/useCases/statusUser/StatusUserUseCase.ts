/* eslint-disable no-plusplus */
import { MeatsRepository } from '@/modules/meat/infra/knex/repositories/MeatsRepository'

export class StatusUserUseCase {
  constructor(private meatsRepository: MeatsRepository) {}
  async execute(userId: string) {
    const listMeats = await this.meatsRepository.listAllMeats(userId)
    const filterDietTrue = listMeats.filter(
      (meat) => Boolean(meat.isFitness) === true
    )
    const filterDietFalse = listMeats.filter(
      (meat) => Boolean(meat.isFitness) === true
    )

    const bestSequenceMeal = listMeats.map((item) => item.isFitness)
    const minRecovery = 1
    let count = 0
    let recovery = 0

    for (let i = 0; i < bestSequenceMeal.length; i++) {
      if (Boolean(bestSequenceMeal[i]) === true) {
        count++
      }

      if (Boolean(bestSequenceMeal[i]) === false) {
        if (count >= minRecovery && count > recovery) {
          recovery = count
        }
        count = 0
      }

      if (count >= minRecovery && count > recovery) {
        recovery = count
      }
    }

    return {
      meatsTotal: listMeats.length,
      numberInDiet: filterDietTrue.length,
      numberOutDiet: filterDietFalse.length,
      bestSequence: recovery
    }
  }
}

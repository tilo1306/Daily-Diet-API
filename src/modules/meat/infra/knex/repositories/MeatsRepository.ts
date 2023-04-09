import { knex } from '@/database/database'
import { ICreateMeatDTO } from '@/modules/meat/dtos/ICreateMeatDTO'
import { IMeatsRepository } from '@/modules/meat/repositories/IMeatsRepository'

import { Meat } from '../entities/Meat'

export class MeatsRepository implements IMeatsRepository {
  async create({
    date_and_hour,
    description,
    id,
    isFitness,
    name,
    userId
  }: ICreateMeatDTO): Promise<Meat> {
    const meat = await knex('meats')
      .insert({
        date_and_hour,
        description,
        id,
        isFitness,
        name,
        userId
      })
      .returning('*')

    return meat as unknown as Meat
  }
  async listAllMeats(userId: string): Promise<Meat[]> {
    const listMeats = await knex('meats').where('userId', userId).select()

    return listMeats
  }

  async findMeat(id: string, userId: string): Promise<Meat> {
    const meat = await knex('meats').where({ userId, id }).first()

    return meat as Meat
  }
}

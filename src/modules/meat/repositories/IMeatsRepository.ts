import { ICreateMeatDTO } from '../dtos/ICreateMeatDTO'
import { Meat } from '../infra/knex/entities/Meat'

export interface IMeatsRepository {
  create(data: ICreateMeatDTO): Promise<Meat>
  listAllMeats(userId: string): Promise<Meat[]>
  findMeat(id: string, userId: string): Promise<Meat>
}

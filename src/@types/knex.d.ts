/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      email: string
      password: string
      created_at: string
    }
    meats: {
      id: string
      name: string
      description: string
      date_and_hour: string
      isFitness: boolean
      userId: string
      created_at: Date
    }
  }
}

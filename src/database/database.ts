import 'dotenv/config'
import { knex as knexDb, Knex } from 'knex'

import { env } from '../env'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
}

export const knex = knexDb(config)

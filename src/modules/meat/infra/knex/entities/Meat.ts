import { v4 as uuidV4 } from 'uuid'

export class Meat {
  id: string
  name: string
  description: string
  date_and_hour: string
  isFitness: boolean
  created_at: Date
  userId: string
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

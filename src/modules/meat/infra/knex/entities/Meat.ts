import { v4 as uuidV4 } from 'uuid'

export class Meat {
  id: string
  name: string
  description: string
  date_and_time: Date
  diet: boolean
  userId: string
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

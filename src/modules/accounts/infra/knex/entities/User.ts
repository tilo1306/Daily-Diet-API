import { v4 as uuidV4 } from 'uuid'

export class User {
  id: string
  email: string
  password: string
  created_at: Date
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

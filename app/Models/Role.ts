import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export enum RoleId {
  SUPER_ADMIN = 'super_admin',
  CLIENT = 'client',
}

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: RoleId

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

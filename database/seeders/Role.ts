import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role, { RoleId } from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    await Role.updateOrCreateMany('id', [
      { id: RoleId.SUPER_ADMIN, description: 'Super Admin' },
      { id: RoleId.CLIENT, description: 'Cliente' },
    ])
  }
}

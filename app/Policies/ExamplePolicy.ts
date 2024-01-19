import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'
import { RoleId } from 'App/Models/Role'

export default class ExamplePolicy extends BasePolicy {
  public async before(user: User | null) {
    if (user && user.roleId === RoleId.SUPER_ADMIN) {
      return true
    }
  }

  public async viewList(_user: User) {
    return true
  }
  public async view(_user: User, _client: any) {
    return true
  }
  public async create(_user: User) {
    return true
  }
  public async update(_user: User, _client: any) {
    return true
  }
  public async delete(_user: User, _client: any) {
    return true
  }
}

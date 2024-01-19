import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RoleId } from 'App/Models/Role'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'

export default class SessionsController {
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)

    try {
      const token = await auth.use('api').attempt(email, password, { expiresIn: '7d' })

      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async register({ request, response }: HttpContextContract) {
    const { name, email, password, cpf } = await request.validate(RegisterUserValidator)

    const user = await User.create({ name, email, password, cpf, roleId: RoleId.CLIENT })

    return response.created(user)
  }

  public async me({ auth }: HttpContextContract) {
    return auth.user
  }
}

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('me', 'SessionsController.me').as('me')
})
  .as('v1')
  .prefix('v1')
  .middleware('auth')

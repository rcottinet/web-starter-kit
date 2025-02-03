import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async store({ request, auth, response, session }: HttpContext) {
    try {
      const { name, email, password } = request.only(['name', 'email', 'password'])

      // Check for existing user
      const existingUser = await User.findBy('email', email)
      if (existingUser) {
        session.flash('errors', {
          email: 'This email is already registered',
        })
        return response.redirect().back()
      }

      // Create new user
      const user = await User.create({ fullName: name, email, password })

      // Login the user
      await auth.use('web').login(user)

      // Redirect back and let auth middleware handle the redirect
      return response.redirect().back()
    } catch (error) {
      console.error('Error creating user:', error)

      return response.redirect().back()
    }
  }

  async edit({ auth, inertia }: HttpContext) {
    const user = auth.user!

    return inertia.render('profile', {
      user: {
        name: user.fullName,
        email: user.email,
      },
    })
  }

  async update({ request, auth, response, session }: HttpContext) {
    try {
      const { name } = request.only(['name'])

      const user = auth.user!
      user.fullName = name
      await user.save()

      session.flash('success', 'Profile updated successfully')
      return response.redirect().back()
    } catch (error) {
      session.flash('error', 'Something went wrong updating your profile')
      return response.redirect().back()
    }
  }
}

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const SessionsController = () => import('#controllers/sessions_controller')
const UsersController = () => import('#controllers/users_controller')

router.on('/').redirect('/dashboard').use(middleware.auth())
router.on('/dashboard').renderInertia('home').use(middleware.auth())

// PROFILE ROUTES
router.get('/profile', [UsersController, 'edit']).use(middleware.auth())
router.post('/profile', [UsersController, 'update']).use(middleware.auth())

// AUTH ROUTES
router.on('/login').renderInertia('auth/login').use(middleware.guest())
router.on('/register').renderInertia('auth/register').use(middleware.guest())
// Register action (POST route for creating a new user)
router.post('/auth/register', [UsersController, 'store']).use(middleware.guest())
// Login action (POST route for logging in)
router.post('/auth/login', [SessionsController, 'store']).use(middleware.guest())
// Logout action (POST route for logging out)
router.post('/auth/logout', [SessionsController, 'logout']).use(middleware.auth())

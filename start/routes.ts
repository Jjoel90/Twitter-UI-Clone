/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import BlogController from '#controllers/BlogController'
import AuthController from '#controllers/auth_controller'

router.on('/').render('pages/home')

//Routes pour afficher les formulaires (GET)
router.get('/register', [AuthController, 'registerShow'])
router.get('/login', [AuthController, 'loginShow'])
router.get('/logout', [AuthController, 'logoutShow'])

// Routes qui vont passer a l'actions (POST)
router.post('/register', [AuthController, 'registerShow'])
router.post('/login', [AuthController, 'loginShow'])
router.post('/logout', [AuthController, 'logoutShow'])



/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BlogController from '#controllers/BlogController'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.post('/register', 'AuthController.register')
router.post('/login', 'AuthController.login')
router.post('/logout','AuthController.logout')


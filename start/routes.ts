/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
// import BlogController from '#controllers/BlogController'
import AuthController from '#controllers/auth_controller'

router.on('/').render('pages/auth/register')

//Routes pour afficher les formulaires (GET)
router.get('/register', [AuthController, 'registerShow'])
router.get('/login', [AuthController, 'loginShow'])
router.get('/logout', [AuthController, 'logoutShow'])

router.get('/private', async ({ auth, response}) => {

    const isLoggedIn = await auth.use('web').check()

    if (!isLoggedIn) {
        return response.redirect('/register') // sers a rediriger vers l'inscription
    }

    return response.redirect('/dashboard') // rediriger vers une autre page reserve
})

// Routes qui vont passer a l'actions (POST)
router.post('/register', [AuthController, 'registerShow'])
router.post('/login', [AuthController, 'loginShow'])
router.post('/logout', [AuthController, 'logoutShow'])



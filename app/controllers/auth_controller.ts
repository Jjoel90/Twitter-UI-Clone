import type { HttpContext } from '@adonisjs/core/http'
import { Template } from 'edge.js'

export default class AuthController {
    public async registerShow({ view }: HttpContext) {

        return view.render('auth/register')
    }

   

    public async loginShow({ view }: HttpContext) {

        return view.render('auth/login')
    }

    public async logoutShow({ view }: HttpContext) {

        return view.render('auth/logout')//optionnel
    }
}
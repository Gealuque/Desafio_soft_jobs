import { Router } from 'express'
import { loginUsuario } from '../src/Controllers/authController.js'

const router = Router()

router.post('/login', loginUsuario)

export default router

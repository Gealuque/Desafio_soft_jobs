import { Router } from 'express'
import { loginUsuario } from '../src/Controllers/authController.js'

const router = Router()

router.post('/', loginUsuario)

export default router

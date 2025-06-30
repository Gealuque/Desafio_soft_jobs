import { Router } from 'express'

import { registrarUsuario } from '../src/Controllers/userConstroller.js'

const router = Router()

router.post('/registrarse', registrarUsuario)

export default router

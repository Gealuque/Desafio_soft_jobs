import { Router } from 'express'
import { obtenerUsuariosPorToken, registrarUsuario } from '../src/Controllers/userConstroller.js'
import { crearUsuarioMiddleware } from '../middleware/user.middleware.js'
import { verificaToken } from '../middleware/verificaToken.middleware.js'

const router = Router()

router.post('/', crearUsuarioMiddleware, registrarUsuario)
router.get('/', verificaToken, obtenerUsuariosPorToken)

export default router

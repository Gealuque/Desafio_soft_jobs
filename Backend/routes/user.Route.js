import { Router } from 'express'
import { obtenerUsuariosPorToken, registrarUsuario } from '../src/Controllers/userConstroller.js'
import { crearUsuarioMiddleware } from '../middleware/user.middleware.js'
import { verificaToken } from '../middleware/verificaToken.middleware.js'

const router = Router()

router.post('/usuarios', crearUsuarioMiddleware, registrarUsuario)
router.get('/usuarios', verificaToken, obtenerUsuariosPorToken)

export default router

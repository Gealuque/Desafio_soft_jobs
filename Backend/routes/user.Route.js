import { Router } from 'express'
import { obtenerUsuariosEmail, registrarUsuario } from '../src/Controllers/userConstroller.js'
import { crearUsuarioMiddleware } from '../middleware/user.middleware.js'
import { verificaToken } from '../middleware/verificaToken.middleware.js'

const router = Router()

router.post('/usuarios', crearUsuarioMiddleware, registrarUsuario)
router.get('/usuarios', verificaToken, obtenerUsuariosEmail)

export default router

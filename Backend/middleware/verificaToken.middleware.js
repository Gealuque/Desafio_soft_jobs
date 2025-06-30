import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const verificaToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(400).json({ message: 'Debe tener un token' })
    }
    const extraerToken = token.split(' ')[1]
    const decode = jwt.verify(extraerToken, process.env.JWTSECRET)
    req.user = decode.email
    next()
  } catch (error) {
    return res.status(500).json({ message: 'El token es invalido' })
  }
}

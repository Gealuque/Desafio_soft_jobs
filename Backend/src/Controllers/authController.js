import { encontrarUsusarioPorEmailModel } from '../Models/usersModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await encontrarUsusarioPorEmailModel(email)
    if (!email) {
      res.status(401).json({ message: 'Usuario no encontrado' })
    }
    const validacionPassword = bcrypt.compareSync(password, user.password)
    if (!validacionPassword) {
      res.status(401).json({ message: 'No se puedo Autenticar' })
    }
    const token = jwt.sign({ email }, process.env.JWTSECRET, {
      expiresIn: '10s'
    })
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Error al inciar sesión' })
  }
}

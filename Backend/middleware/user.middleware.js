import { encontrarUsusarioPorEmailModel } from '../src/Models/usersModel.js'

export const crearUsuarioMiddleware = async (req, res, next) => {
  try {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ message: 'El email es obligatorio ' })
    }
    const user = await encontrarUsusarioPorEmailModel(email)
    if (user) {
      return res.status(400).json({ message: ' El usuario ya existe ' })
    }
    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: ' Se ha detectado un problema ' })
  }
}

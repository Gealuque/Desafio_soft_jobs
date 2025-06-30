import { crearUsuarioModelo, encontrarUsusarioPorEmailModel } from '../Models/usersModel.js'

export const registrarUsuario = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    if (!email || !password || !rol || !lenguage) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }
    const user = await crearUsuarioModelo({ email, password, rol, lenguage })
    res.status(201).json({ message: 'Usuario creado exitosamente', user })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export const obtenerUsuariosPorToken = async (req, res) => {
  try {
    const email = req.user
    const user = await encontrarUsusarioPorEmailModel(email)
    if (!user) {
      return res.status(400).json({ error: 'Usuarios no encontrado' })
    }
    delete user.password
    res.status(200).json([user])
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

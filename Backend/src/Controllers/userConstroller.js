import { crearUsuarioModelo } from '../Models/usersModel.js'

export const registrarUsuario = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await crearUsuarioModelo(email, password)
    res.status(201).json({ message: 'Usuario creado exitosamente', user })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

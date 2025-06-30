import { text } from 'express'
import pool from '../../db/config.js'
import bcrypt from 'bcryptjs'

// Registro
export const crearUsuarioModelo = async ({ email, password, rol, lenguage }) => {
  const hashedPassword = bcrypt.hashSync(password)
  const sqlQuery = {
    text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email, rol, lenguage',
    values: [email, hashedPassword, rol, lenguage]
  }
  const respuesta = await pool.query(sqlQuery)
  return respuesta.rows[0]
}

// Inicio Sesión

export const encontrarUsusarioPorEmailModel = async (email) => {
  const sqlQuery = {
    text: 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1',
    values: [email]
  }
  const respuesta = await pool.query(sqlQuery)
  return respuesta.rows[0]
}

// Perfil Usuario Completo (Opcional)

export const obtenerUsuariosModel = async () => {
  const sqlQuery = {
    text: 'SELECT id, email, rol, lenguge FROM usuarios'
  }
  const respuesta = await pool.query(sqlQuery)
  return respuesta.rows
}

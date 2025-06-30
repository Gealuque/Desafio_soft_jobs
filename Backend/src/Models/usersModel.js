import { text } from 'express'
import pool from '../../db/config.js'
import bcrypt from 'bcryptjs'

// Registro
export const crearUsuarioModelo = async (email, password) => {
  const hashedPassword = bcrypt.hashSync(password)
  const sqlQuery = {
    text: 'INSERT INTO usuarios (email, password) VALUES ($1, $2) RETURNING email',
    values: [email, hashedPassword]
  }
  const respuesta = await pool.query(sqlQuery)
  return respuesta.rows[0]
}

// Inicio Sesión

export const encontrarUsusarioPorEmailModel = async (email) => {
  const sqlQuery = {
    text: 'SELECT * FROM usuarios WHERE email = $1',
    values: [email]
  }
  const respuesta = await pool.query(sqlQuery)
  return respuesta.rows[0]
}

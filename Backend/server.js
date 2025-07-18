import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user.Route.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/usuarios', userRoutes)
app.use('/login', authRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server encendido http://localhost:${PORT}`))

import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user.Route.js'
import authRoutes from './routes/auth.routes.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', userRoutes)
app.use('/api', authRoutes)

app.listen(PORT, console.log(`Server encendido http://localhost:${PORT}`))

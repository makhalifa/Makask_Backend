import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import connectDB from './mongoose.config'
import router from './routes/router'
import cors from 'cors'

dotenv.config()

const app: Application = express()

// cors
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
)

// Built-in Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// Third-party Middleware
app.use(morgan('dev'))

app.get('/', (req: Request, res: Response) => {
    res.json('Hello World🌎!')
})

app.use('/api', router)

// connect Database
connectDB()

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`)
})

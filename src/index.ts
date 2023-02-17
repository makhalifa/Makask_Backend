import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import connectDB from './mongoose.config'
import router from './routes/router'
import cors from 'cors'
// import { swaggerDocs } from './utils/swagger'

dotenv.config()

const app: Application = express()
const server = require('http').createServer(app)

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
server.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`)
    // console.log(`localhost:${process.env.PORT}`)
    // swaggerDocs(app as any)
})

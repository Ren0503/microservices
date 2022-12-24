import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const PORT = process.env.PORT || 4000

app.listen(
  PORT, 
  () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
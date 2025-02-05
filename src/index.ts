import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import { env } from './config/enviroment'
import logger from './config/logger'
import './modules/todo/dependencyInjection'
import { v1Router } from './routes/v1'

const port = env.PORT || 3000

const application = () => {
  dotenv.config()

  const app = express()

  // TODO: add middlewares
  app.use(cors())

  app.use(cookieParser())

  app.use(express.json())

  app.use('/v1', v1Router)

  app.listen(port, () => {
    logger.info('Server is running in port: ' + port)
  })
}

// TODO: connect mysql

application()

import express, { Request, Response } from 'express'
import router from './routes'
import cors from 'cors'

function createApp() {
  const app = express()

  app.use(express.json())
  app.use("/api", router)

  const corsOptions = {
    origin: ["*.brunodorea.com.br", "localhost"],
    methods: ['GET']
  }
  app.use(cors())

  return app
}

export default createApp
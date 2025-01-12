import express from 'express'
import dotenv from 'dotenv'
import { Request, Response } from 'express'

const application = () => {
  dotenv.config()

  const app = express()
  const port = process.env.PORT || 3000

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

application()

import { Router } from 'express'
import { todoRouter } from '../../modules/todo/routes'

const router = Router()

router.use('/todo', todoRouter)

export const v1Router = router

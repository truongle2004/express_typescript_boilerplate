import { Router } from 'express'
import { TodoController } from '../controllers/todo.controller'
import { container } from 'tsyringe'
import 'reflect-metadata'

const router = Router()

const todoController = container.resolve(TodoController)

router.route('/get').get(todoController.getTodo)

export const todoRouter = router

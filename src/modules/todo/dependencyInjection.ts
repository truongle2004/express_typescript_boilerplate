import 'reflect-metadata'
import { container } from 'tsyringe'
import { IGetTodoRepository } from './repositories/get-todo.repository.interface'
import { GetTodoRepository } from './repositories/impl/get-todo.repository'
import { IGetTodoService } from './services/get-todo.service.interface'
import { GetTodoService } from './services/impl/get-todo.service'
import { TodoController } from './controllers/todo.controller'

// register interface implementation
container.register<IGetTodoRepository>('IGetTodoRepository', {
  useClass: GetTodoRepository
})

container.register<IGetTodoService>('IGetTodoService', {
  useClass: GetTodoService
})

container.resolve(TodoController)
// dependencies will have been resolved

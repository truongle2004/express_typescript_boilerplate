import { inject, injectable } from 'tsyringe'
import { IGetTodoService } from '../get-todo.service.interface'
import type { IGetTodoRepository } from '../../repositories/get-todo.repository.interface'
import 'reflect-metadata'

@injectable()
export class GetTodoService implements IGetTodoService {
  constructor(
    @inject('IGetTodoRepository')
    private getTodoRepository: IGetTodoRepository
  ) {}

  execute(): string {
    // TODO: retrieve data from db
    return 'get_to_do'
  }
}

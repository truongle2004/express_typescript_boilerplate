import { injectable } from 'tsyringe'
import { IGetTodoRepository } from '../get-todo.repository.interface'

@injectable()
export class GetTodoRepository implements IGetTodoRepository {
  execute(): string {
    // TODO: retrieve data from db
    return 'get_to_do'
  }
}

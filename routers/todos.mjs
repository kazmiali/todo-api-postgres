import { Router } from 'express';
import {
	addTodo,
	deleteTodo,
	getTodos,
	updateTodo,
} from '../controllers/todos.mjs';

const todosRouter = Router();

todosRouter.get('/', getTodos);

todosRouter.post('/', addTodo);

todosRouter.put('/:id', updateTodo);

todosRouter.delete('/:id', deleteTodo);

export default todosRouter;

import { Router } from 'express';

const todosRouter = Router();
const todos = [];

todosRouter.get('/', (req, res) => {
	res.json({ message: 'List of todos.', data: todos });
});

todosRouter.post('/', (req, res) => {
	const { title } = req.body;
	const todo = { title: title, id: Date.now(), isDone: false };
	todos.push(todo);
	res.status(201).json({ message: 'Todo Created.', data: todo });
});

todosRouter.put('/', (req, res) => {
	const { title } = req.body;
	const todo = { title };
	todos.push(todo);
	res.status(201).json({ message: 'Todo Created.', data: todo });
});

todosRouter.delete('/', (req, res) => {
	const { title } = req.body;
	const todo = { title };
	todos.push(todo);
	res.status(201).json({ message: 'Todo Created.', data: todo });
});

export default todosRouter;

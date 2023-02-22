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
	const { id, title } = req.body;
	console.log('id', id);
	console.log('title', title);
	console.log('todos', todos);

	if (!Number(id)) {
		res.status(500).json({ message: 'ERROR' });
	}

	let todo = todos.filter(todo => Number(todo.id) === Number(id));
	if (todo?.length) {
		todo = todo[0];
	}
	console.log('todo', todo);
	todo.title = title;
	res.status(200).json({ message: 'Todo Updated.', data: todo });
});

todosRouter.delete('/', (req, res) => {
	const { title } = req.body;
	const todo = { title };
	todos.push(todo);
	res.status(201).json({ message: 'Todo Created.', data: todo });
});

export default todosRouter;

let todos = [];

export function getTodos(req, res) {
	res.json({ message: 'List of todos.', data: todos });
}

export function addTodo(req, res) {
	const { title } = req.body;
	const todo = { title: title, id: Date.now(), isDone: false };
	todos.push(todo);
	res.status(201).json({ message: 'Todo Created.', data: todo });
}

export function updateTodo(req, res) {
	if (!req.params.id && !Number(req.params.id)) {
		res.status(404).json({ error: 'id not provided' });
		return;
	}

	if (!req || !req.body || !req.body.title) {
		res.status(404).json({ error: 'invalid data sent' });
		return;
	}

	const id = req.params.id;

	const { title } = req.body;

	let todo = todos.filter(todo => Number(todo.id) === Number(id));
	if (todo?.length) {
		todo = todo[0];
	} else {
		res.status(404).json({ error: `Todo with this id ${id} does not exist` });
		return;
	}
	todo.title = title;
	res.status(200).json({ message: 'Todo Updated.', data: todo });
}

export function deleteTodo(req, res) {
	if (!req.params.id && !Number(req.params.id)) {
		res.status(404).json({ error: 'id not provided' });
		return;
	}

	const id = req.params.id;

	const todo = todos.filter(todo => Number(todo.id) === Number(id));
	if (!todo?.length) {
		res.status(404).json({ error: `Todo with this id ${id} does not exist` });
		return;
	}

	todos = todos.filter(todo => Number(todo.id) !== Number(id));
	res.status(201).json({ message: 'Todo Deleted.', data: todos });
}

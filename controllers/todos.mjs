const todos = [];

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
	if (!req.params.id) {
		res.status(404).json({ error: 'id not provided' });
		return;
	}

	if (!req || !req.body || !req.body.title) {
		res.status(404).json({ error: 'invalid data sent' });
		return;
	}

	const id = req.params.id;

	const { title } = req.body;

	if (!Number(id)) {
		res.status(500).json({ message: 'ERROR' });
	}

	let todo = todos.filter(todo => Number(todo.id) === Number(id));
	if (todo?.length) {
		todo = todo[0];
	}
	todo.title = title;
	res.status(200).json({ message: 'Todo Updated.', data: todo });
}

export function deleteTodo(req, res) {
	const id = req.params.id;

	todos = todos.filter(todo => Number(todo.id) !== Number(id));
	res.status(201).json({ message: 'Todo Created.', data: todo });
}

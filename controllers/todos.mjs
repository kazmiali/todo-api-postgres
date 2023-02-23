import { pool } from '../db.cjs';
import { convertStringToBool } from '../utils/helper.mjs';

export async function getTodos(req, res) {
	try {
		const response = await pool.query('SELECT * FROM todos');
		console.log('response', response);
		console.log(response.rows);
		res.json({ message: 'List of todos.', data: response.rows });
	} catch (error) {
		console.error(error);
	}
}

export async function addTodo(req, res) {
	const { title, isDone } = req.body;
	try {
		const response = await pool.query(
			'INSERT INTO todos (title, isDone) VALUES ($1, $2)',
			[title, convertStringToBool(isDone)],
		);
		console.log('response', response);
		console.log(`Added a todo with the title ${title}`);
		res.status(201).json({ message: 'Todo Added.' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error.' });
	}
}

export async function updateTodo(req, res) {
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

	try {
		const response = await pool.query(
			'UPDATE todos SET title = $1 WHERE todo_id = $2',
			[title, id],
		);

		console.log('response', response);
		console.log(`Updated the shark title to ${title}`);
		res.status(200).json({ message: `Updated the shark title to ${title}` });
	} catch (error) {
		res.status(500).json({ message: 'Error.' });
		console.error(error);
	}
}

export async function deleteTodo(req, res) {
	if (!req.params.id && !Number(req.params.id)) {
		res.status(404).json({ error: 'id not provided' });
		return;
	}

	const id = req.params.id;

	try {
		const response = await pool.query('DELETE from todos WHERE todo_id = $1', [id]);

		console.log('response', response);
		res.status(201).json({ message: 'todo Deleted.' });
	} catch (error) {
		res.status(500).json({ message: 'Error.' });
		console.error(error);
	}
}

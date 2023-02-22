import express from 'express';
import todosRouter from './routers/todos.mjs';

const app = express();

app.use(express.json());
app.use('/todos', todosRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(8000, () => console.log('Server Started'));
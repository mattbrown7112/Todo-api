var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for dinner',
	completed: false
}, {
	id: 2,
	description: 'Buy umbrella',
	completed: false
}, {
	id: 3,
	description: 'Go F yaself',
	completed: true
}];

app.get('/', function (req, res) {
	res.send('Todo api Root000');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	// Iterate array. Find match.
	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

	res.send('Asskig for todo with id of ' + req.params.id)
});

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});
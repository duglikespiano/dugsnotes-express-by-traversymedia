const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
	{ id: 1, title: 'POST ONE' },
	{ id: 2, title: 'POST TWO' },
	{ id: 3, title: 'POST THREE' },
];

app.get('/api/posts', (req, res) => {
	res.json(posts);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

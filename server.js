const express = require('express');

const app = express();
const port = process.env.PORT || 1000;

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
	{ id: 1, title: 'POST ONE' },
	{ id: 2, title: 'POST TWO' },
	{ id: 3, title: 'POST THREE' },
];

// get all posts
app.get('/api/posts', (req, res) => {
	const limit = parseInt(req.query.limit);

	if (!isNaN(limit) && limit > 0) {
		res.json(posts.slice(0, limit));
	} else {
		res.json(posts);
	}
});

// get a single post
app.get('/api/posts/:id', (req, res) => {
	const id = parseInt(req.params.id);
	res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

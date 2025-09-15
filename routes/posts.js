import express from 'express';
const router = express.Router();

let posts = [
	{ id: 1, title: 'POST ONE' },
	{ id: 2, title: 'POST TWO' },
	{ id: 3, title: 'POST THREE' },
];

// get all posts
router.get('/', (req, res) => {
	const limit = parseInt(req.query.limit);

	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}
	res.status(200).json(posts);
});

// get a single post
router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		return res.status(404).json({ message: `A post with the id ${id} was not found` });
	}
	res.status(200).json(post);
});

export default router;

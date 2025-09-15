import express from 'express';
const router = express.Router();

let posts = [
	{ id: 1, title: 'POST ONE' },
	{ id: 2, title: 'POST TWO' },
	{ id: 3, title: 'POST THREE' },
];

// get all posts
router.get('/', (req, res, next) => {
	const limit = parseInt(req.query.limit);

	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}
	res.status(200).json(posts);
});

// get a single post
router.get('/:id', (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const err = new Error(`A post with the id ${id} was not found`);
		err.status = 404;
		return next(err);
	}
	res.status(200).json(post);
});

// create a new post
router.post('/', (req, res, next) => {
	const newPost = {
		id: posts.length + 1,
		title: req.body.title,
	};
	if (!newPost.title) {
		const err = new Error('Please include a title');
		err.status = 400;
		return next(err);
	}
	posts.push(newPost);
	res.status(201).json(posts);
});

// update a new post
router.put('/:id', (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const err = new Error(`A post with the id ${id} was not found`);
		err.status = 404;
		return next(err);
	}
	post.title = req.body.title;
	res.status(200).json(posts);
});

// delete a new post
router.delete('/:id', (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const err = new Error(`A post with the id ${id} was not found`);
		err.status = 404;
		return next(err);
	}
	posts = posts.filter((post) => post.id !== id);
	res.status(200).json(posts);
});

export default router;

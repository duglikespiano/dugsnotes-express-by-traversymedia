import { posts } from '../routes/posts.js';

// @desc get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
	const limit = parseInt(req.query.limit);
	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}
	res.status(200).json(posts);
};

// @desc get a post
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const err = new Error(`A post with the id ${id} was not found`);
		err.status = 404;
		return next(err);
	}
	res.status(200).json(post);
};

// @desc create a post
// @route POST /api/posts/
export const createPost = (req, res, next) => {
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
};

// @desc create a post
// @route POST /api/posts/:id
export const updatePost = (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const err = new Error(`A post with the id ${id} was not found`);
		err.status = 404;
		return next(err);
	}
	post.title = req.body.title;
	res.status(200).json(posts);
};

// @desc delete a post
// @route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const err = new Error(`A post with the id ${id} was not found`);
		err.status = 404;
		return next(err);
	}
	posts = posts.filter((post) => post.id !== id);
	res.status(200).json(posts);
};

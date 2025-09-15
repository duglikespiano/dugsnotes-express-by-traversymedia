import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js';
const router = express.Router();

export let posts = [
	{ id: 1, title: 'POST ONE' },
	{ id: 2, title: 'POST TWO' },
	{ id: 3, title: 'POST THREE' },
];

// get all posts
// router.get('/', getPosts);

// // get a single post
// router.get('/:id', getPost);

// // create a new post
// router.post('/', createPost);

// // update a new post
// router.put('/:id', updatePost);

// // delete a new post
// router.delete('/:id', deletePost);

export default router;

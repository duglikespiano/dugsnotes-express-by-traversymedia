const output = document.querySelector('#output');
const fetchPostsButton = document.querySelector('#get-posts-btn');
const formButton = document.querySelector('#add-post-form');

// get and show posts
const showPosts = async () => {
	try {
		const res = await fetch('http://localhost:8000/api/posts');
		if (!res.ok) {
			throw new Error('Failed to fetch posts');
		}
		const posts = await res.json();
		output.innerHTML = '';
		posts.forEach((post) => {
			const postElement = document.createElement('div');
			postElement.textContent = post.title;
			output.appendChild(postElement);
		});
	} catch (error) {
		console.log(`Error fetching posts: ${error.message}`);
	}
};

// submit a new post
const addPost = async (event) => {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	const title = formData.get('title');
	try {
		const res = await fetch('http://localhost:8000/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title }),
		});
		if (!res.ok) {
			throw new Error('Failed to add a post');
		}
		const newPost = await res.json();
		const postElement = document.createElement('div');
		postElement.textContent = newPost.title;
		output.appendChild(postElement);
		showPosts();
	} catch (error) {
		console.error('Error adding a post');
	}
};

// add eventlistners
fetchPostsButton.addEventListener('click', showPosts);
formButton.addEventListener('submit', addPost);

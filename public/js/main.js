const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');

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

// add eventlistners
button.addEventListener('click', showPosts);

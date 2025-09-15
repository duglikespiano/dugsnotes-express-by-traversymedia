import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const app = express();
const port = process.env.PORT || 1000;

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));

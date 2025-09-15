import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const app = express();
const port = process.env.PORT || 1000;

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());

// https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0
// https://stackoverflow.com/questions/29175465/body-parser-extended-option-qs-vs-querystring/29177740#29177740
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));

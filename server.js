const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
const posts = require('./routes/posts');
// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));

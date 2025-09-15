const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
	// res.send('Hello world!');
	// res.send('<h1>Hello world!</h1>');
	// don't need to convert an object into JSON, express handles it
	res.send({ message: 'hello world!' });
});
app.listen(port, () => console.log(`Server is running on port ${port}`));

import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ msg: 'Hello World 👋' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

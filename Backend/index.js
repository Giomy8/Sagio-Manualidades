import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

app.get('/articles', (req, res) => {
    res.send('articles!')
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
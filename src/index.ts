import express from 'express';
import analyzeRouter from './routes/analyze.route';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.text());
app.use('/', analyzeRouter);

app.listen(PORT, () => {
    console.log(`The server is running on https://localhost:${PORT}`)
});
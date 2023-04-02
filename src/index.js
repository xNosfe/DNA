import express from 'express';
import bodyParser from 'body-parser';
import adnRoute from './routes/adn.js';
import model from './model/index.js';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.json());
app.use('/adn', adnRoute);

app.get('/',(req,res)=> res.send('Esto es una prueba para Guros'))

app.listen(3000)

console.log('Server is running');

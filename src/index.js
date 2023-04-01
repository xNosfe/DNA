import express from 'express';
import ejs from 'ejs';
import {dirname, join} from 'path';
import model from './model/index.js';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')//Confirma el uso de ejs

app.get('/',(req,res)=> res.render('index'))

app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.listen(3000)

console.log('Server is running');

import express from 'express';
import ejs from 'ejs';
import {dirname, join} from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import adnRoute from './routes/adn.js';
import model from './model/index.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.json());
app.use('/adn', adnRoute);

app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')//Confirma el uso de ejs

app.get('/',(req,res)=> res.render('index'))

app.listen(3000)

console.log('Server is running');

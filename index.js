import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('', Routes);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err){
        res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || ``;


const username = "user"
const password = "1234"

Connection(username, password);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
// }

app.listen(PORT, () => console.log(`Surver is running successfully on PORT ${PORT}`));
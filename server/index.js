import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import route from './routes/routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/',route)



const PORT = 8000;

Connection();

app.listen(PORT, () => {
    console.log(`server is listening on the port ${PORT}`);
})
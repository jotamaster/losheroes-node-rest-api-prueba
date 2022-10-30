import express from 'express';
import config from './config';
import cors from 'cors';

import ClientsRouter from './routes/clients.routes';


const corsOptions = {
    origin: '*', 
    optionsSuccessStatus: 200
};


const app = express();

//settings
const db = require("./models/index");
db.sequelize.sync();


app.set('port', config.appPort || 3000);

app.use(express.json());
app.use(cors(corsOptions));

//routes
app.get('/',(req, res )=>{
    res.json({'message':'welcome clientes api'});
});

app.use('/api/clients',ClientsRouter);

export default app;
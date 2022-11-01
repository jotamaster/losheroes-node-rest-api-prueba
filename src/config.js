import {config} from 'dotenv';

config();


export default {

    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    dbport: process.env.DBPORT,
    host: process.env.HOST,

}
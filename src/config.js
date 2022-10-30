import {config} from 'dotenv';

config();


export default {

    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    host: process.env.HOST,

}
import mongoose from 'mongoose';
import config from './config';


import dbConfig from './db.config';
import sequelize from 'sequelize';






(async () => {
   const db = await mongoose.connect(config.mongodbURL,{
       useNewUrlParser:true,
       useUnifiedTopology:true
   });
   console.log('database is  connected to', db.connection.name);
})();

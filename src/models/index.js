import Sequelize from 'sequelize'
import config from './../config'
const sequelize = new Sequelize('losheroesnode','root', config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}); const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.client = require('./Client')(sequelize, Sequelize);
module.exports = db;
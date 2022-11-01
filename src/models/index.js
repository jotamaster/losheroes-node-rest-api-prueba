import Sequelize from 'sequelize'
import config from './../config'
console.log(config)
const sequelize = new Sequelize(config.database,config.user, config.password, {
    host: 'sql.freedb.tech',
    dialect: 'mysql',
    operatorsAliases: 0,

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
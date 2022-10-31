module.exports = (sequelize, Sequelize) => {

    const Client = sequelize.define('clients', {

        name: {
            type: Sequelize.STRING,
            allowNull:false,
            
        },
        rut: {
            type: Sequelize.STRING,
            allowNull:false,
            unique:true
        },
        email: {
            type: Sequelize.STRING,
            allowNull:false,
            unique:true,
            validate:{isEmail:true}
        },
        address: {
            type: Sequelize.STRING,
            allowNull:false,
        }
    });
    return Client;
};
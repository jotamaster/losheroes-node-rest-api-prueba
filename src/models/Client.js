module.exports = (sequelize, Sequelize) => {

    const Client = sequelize.define('client', {

        title: {
            type: Sequelize.STRING
        },
        subtitle: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Client;
};
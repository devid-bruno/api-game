import sequelize, { Sequelize } from 'sequelize';

var db = 'heroku_630876c58d7d8ef';

const connect = new Sequelize(`${db}`, 'b8878e9c187db7', 'dc2f5a9c', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    timezone: '-03:00'
})

connect.authenticate().then(() => {
    console.log(`Conectado ao banco ${db}`);
}).catch((msgErr) => {
    console.log("Unable to connect to the database:", msgErr);
});

export default connect;
import sequelize, { Sequelize } from 'sequelize';

var db = 'heroku_b62f78d788e6a28';

const connect = new Sequelize(`${db}`, 'b1af269f67edb7', 'cc378950', {
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
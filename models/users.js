import sequelize from 'sequelize';
import connect from '../connect.js';

const User = connect.define('users', {
    name: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

//User.sync({force: true});

export default User;
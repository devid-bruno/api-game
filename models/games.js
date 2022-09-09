import sequelize from 'sequelize';
import connect from '../connect.js';

const Game = connect.define('games', {
    name: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    data: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    }
});


//Game.sync({force: true});

export default Game;
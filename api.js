import express from 'express';
import Game from './models/games.js';
import User from './models/users.js';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const jwtSceret = '1234567890';

const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const port = process.env.PORT || 8080;

api.get("/", (req, res) => {
    send.json({message: "Welcome to the API"});
});

/*
api.post("/game", (req, res) => {
    var { name, price, data} = req.body;

    Game.create({
        name: name,
        price: price,
        data: data
    }).then(() =>{
        res.statusCode = 200;
        res.json({message: "Game created"});
    }).catch(() => {
        res.statusCode = 400;
        res.json({err: "Game not created"});
    })
    res.statusCode = 200;
});

api.put("/game/:id", (req, res) => {
    var { name, price, data} = req.body;
    var id = req.params.id;

    Game.update({
        name: name,
        price: price,
        data: data
    }, {
        where: {id: id}
    }).then(() =>{
        res.statusCode = 200;
        res.json({message: "Game updated"});
    }).catch(err => {
        res.statusCode = 400;
        res.json({err: "Game not updated"});
    })
    res.statusCode = 200;
});

api.delete("/game/:id", (req, res) => {
    var id = req.params.id;
    
    Game.destroy({
        where: {id: id}
    }).then(() =>{
        res.statusCode = 200;
        res.json({message: "Game deleted"});
    }
    ).catch(()=> {
        res.statusCode = 400;
        res.json({err: "Game not deleted"});
    })
    res.statusCode = 200;
});

//users
api.get('/users', (req, res) => {
    User.findAll().then((users) => {
        res.json(users);
    });
});

api.post("/user", (req, res) => {
    var { name, email, password} = req.body;

    User.create({
        name: name,
        email: email,
        password: password
    }).then(() =>{
        res.statusCode = 200;
        res.json({message: "user created"});
    }).catch(() => {
        res.statusCode = 400;
        res.json({err: "User not created"});
    })
    res.statusCode = 200;
});

api.put("/user/:id", (req, res) => {
    var { name, email, password} = req.body;
    var id = req.params.id;

    User.update({
        name: name,
        email: email,
        password: password
    }, {
        where: {id: id}
    }).then(() =>{
        res.statusCode = 200;
        res.json({message: "User updated"});
    }).catch(() => {
        res.statusCode = 400;
        res.json({err: "User not updated"});
    })
    res.statusCode = 200;
});

api.delete("/user/:id", (req, res) => {
    var id = req.params.id;
    
    User.destroy({
        where: {id: id}
    }).then(() =>{
        res.statusCode = 200;
        res.json({message: "User deleted"});
    }
    ).catch(()=> {
        res.statusCode = 400;
        res.json({err: "User not deleted"});
    })
    res.statusCode = 200;
});

//login com token

api.post("/auth", (req, res) => {
    var { email, password} = req.body;
    
    if(email != undefined){
        User.findOne({where: {email: email}}).then((user) => {
            if(user != undefined){
                if(user.password == password){
                    jwt.sign({id: user.id, email: user.email}, jwtSceret, {expiresIn: '48h'}, (err, token) => {
                        if(err){
                            res.status(400);
                            res.json({err: "Falha interna"});
                        }else{
                            res.status(200)
                            res.json({token: token});
                        }
                    });
                }else{
                    res.status(401);
                    res.json({err: "Senha incorreta"});
                }
            }else{
                res.status(404);
                res.json({err: "Email não encontrado"});
            }
        })
    }else{
        res.status(400);
        res.json({err: "Email não encontrado"});
    }
    
});
*/
api.listen(port, () => {});
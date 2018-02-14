const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
let Users = {
    index:(req, res) => {
        User.find({}, (err, users) => {
            if(err) 
                throw err;
            else
                res.send(users);
        });
    },
    create:(req, res) => {//Création d'un utilisateur
        var user = new User({//On récupère les données envoyées par le formulaire
            lastname:req.body.lastname,
            firstname:req.body.firstname,
            username:req.body.username,
            password:req.body.password,
            admin:false,
        });

        bcrypt.genSalt(10, (err, salt) => {//On crypte le mdp
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                user.save((err) => {//On sauvegarde l'utilisateur dans la base de données
                    if(err)
                        throw err;
                    else
                        console.log('User inserted: ');
                        console.log(user)
                        res.send(user)
                });
            });
        });
    },
    update:(req, res) => {},
    delete:(req, res) => {},
    getUserInfos:(req, res) => {},
};

module.exports = Users;
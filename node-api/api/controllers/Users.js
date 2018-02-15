const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
let Users = {
    index:(req, res) => {
        User.find({}, (err, users) => {//On recherche tous les utilsateurs de la bdd
            if(err) 
                throw err;
            else
                res.send(users);//On affiche tous les users
        });
    },
    create:(req, res) => {//Création d'un utilisateur
        let user = new User({//On récupère les données envoyées par le formulaire
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
    update:(req, res) => {
        let username = req.body.username;
        let password = req.body.password;

        User.findById(req.params.id, (err, user) => {//On récupère le user grâce à son id
            if(err) throw err;
            user.username = username;
            bcrypt.compare(password, user.password, (err, isMatch) => {//On compare le mdp tapé par le user avec celui de la bdd
                if(err) throw err;
                if(isMatch){
                    bcrypt.genSalt(10, (err, salt) => {//On crypte le mdp
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            user.password = hash;
                            user.save((err) => {//On sauvegarde l'utilisateur dans la base de données
                                if(err)
                                    throw err;
                                else
                                    console.log('User successfully updated !');
                                    console.log(user);
                                    res.send(user);                                    
                            });
                        });
                    });
                }
            });

        })
    },
    delete:(req, res) => {
        User.findById(req.params.id, (err, userToDelete) => {
            if(err) throw err;
            userToDelete.remove((err) => {
                if(err) throw err;
                console.log('User successfully deleted !');
                res.send(userToDelete.username+' a été supprimé');
            })
        });
    },
    getUserInfos:(req, res) => {
        User.findById(req.params.id, (err, user) => {
            if(err) throw err;
            console.log('User infos printed !');
            console.log(user);
            res.send(user);
        })
    },
};

module.exports = Users;
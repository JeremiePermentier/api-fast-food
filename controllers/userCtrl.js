const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

exports.createUser = (req, res, next) => {
    const email = req.body.email;
    const pseudo = req.body.pseudo;
    let password = req.body.password;

    if (!pseudo && !email && !password) {
        res.status(400).send({
            message: "Content can not be empty !"
        });
    }

    User.findByEmail(email, (err, data) => {
        if (err) {
            if (err.kind === "not found") {

                bcrypt.hash(password, 10 , function(err, bcryptedPassword){
                    let user = new User({
                        email: email,
                        pseudo: pseudo,
                        password: bcryptedPassword
                    })
                
                    User.create(user, (err) => {
                        if (err)
                          res.status(500).send({
                            message:
                              err.message || "Some error occurred while creating the Customer."
                          });
                        else res.send({ response: 'Votre compte à bien été enregistré.' });
                    });
                })
            }
        } else if (data === email) {
            res.status(400).send({ response: "L'email à déjà été utilisée !" })
        }  else {
            res.status(500).send({
                message: "Error retrieving Customer with email " + email
            });
        }
    });
};

exports.login = (req, res, next) => {

};

exports.getUser = (req, res, next) => {

};

exports.getAllUser = (req, res, next) => {

};

exports.deleteUser = (req, res, next) => {

};

exports.updateUser = (req, res, next) => {

};
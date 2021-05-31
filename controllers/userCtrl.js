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
                        if (err){
                          res.status(500).send({
                            message:
                              err.message || "Some error occurred while creating the Customer."
                          });
                        } else {
                            res.send({ response: 'Votre compte à bien été enregistré.' });
                        }
                    });
                })
            }
        } else if (data.email === email) {
            res.status(400).send({ response: "L'email à déjà été utilisée !" })
        }  else {
            res.status(500).send({
                message: "Error retrieving Customer with email " + email
            });
        }
    });
};

exports.login = async (req, res, next) => {

    const email = req.body.email;

    User.findByEmail(email, (err, data) => {
        if (data.email === email){
            bcrypt.compare(req.body.password, data.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ response: 'Mot de passe incorrect !'});
                }
                res.status(200).json({
                    token: jwt.sign(
                        {userId: User.idUsers },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(() => res.status(500).json({ msg : "non" }));
        } else {
            res.status(400).send({ msg: "le compte n'existe pas !" })
        }
    })
};

exports.getUser = (req, res, next) => {

    const id = req.params.id;

    User.selectUser(id, (err, data) => {
        if (err) {
            res.status(404).json({ response: 'User Not Found' })
        } else {
            res.status(200).send(data)
        }
    })
};

exports.getAllUser = (req, res, next) => {
    User.selectAllUser((err, data) => {
        if (err) {
            res.status(404).json({ response: 'User Not Found' })
        } else {
            res.status(200).send(data)
        }
    })
};

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;

    User.delUser(id, (err, data) => {
        if (err) {
            res.status(404).json({ response: 'Not Found' })
        } else {
            res.status(200).json({ response: 'Votre compte à bien été supprimé !' })
        }
    })
};

exports.updateUser = (req, res, next) => {

};
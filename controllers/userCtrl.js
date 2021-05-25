const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res, next) => {
    const email = req.body.email;
    const pseudo = req.body.pseudo;
    const password = req.body.password;

    if(email != null && pseudo != null && password != null){
        return res.status(200).json({ 'response': 'Votre compte à bien été enregistré.'})
    }
    return res.status(400).json({ 'response' : 'err' })
}

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
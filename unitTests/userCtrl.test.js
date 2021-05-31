// import {signup, login, getUser, getAllUser, updateUser, deleteUser} from '../controllers/userCtrl';
// import axios from 'axios';
const request = require('supertest');
const app = require("../app");

describe('POST /user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .send({ email: 'jeremie@gmail.com', pseudo: "Test", password: "Haroc76240"})
        .expect(200, { response: 'Votre compte à bien été enregistré.' }, done);
    });

    it('responds with json', function(done) {
        request(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .send({ email: 'jeremie@gmail.com', pseudo: "Test", password: "Haroc76240"})
        .expect(400, { response: "L'email à déjà été utilisée !" }, done);
    });

});

describe('LOGIN /user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/api/users/login')
        .set('Accept', 'application/json')
        .send({ email: 'jeremie@gmail.com', pseudo: "Test", password: "Haroc7240"})
        .expect(401, { response: 'Mot de passe incorrect !' }, done);
    });
});

describe('GET /user', function() {
    it('responds with json', function(done) {
        request(app)
        .delete('/api/users/delete/49')
        .set('Accept', 'application/json')
        .expect(200, { response: 'Votre compte à bien été supprimmé !' }, done);
    });
});

describe('DELETE /user', function() {
    it('responds with json', function(done) {
        request(app)
        .delete('/api/users/delete/49')
        .set('Accept', 'application/json')
        .expect(200, { response: 'Votre compte à bien été supprimmé !' }, done);
    });
});
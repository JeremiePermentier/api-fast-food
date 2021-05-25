// import {signup, login, getUser, getAllUser, updateUser, deleteUser} from '../controllers/userCtrl';
// import axios from 'axios';
const request = require('supertest');
const app = require("../app");

describe('POST /user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .send({ email: 'jeremie@gmail.com', pseudo: "Test", password: "test"})
        .expect(200, { response: 'Votre compte à bien été enregistré.' }, done);
    });

    it('responds with json', function(done) {
        request(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .send({ email: 'jeremie@gmail.com', pseudo: "Test"})
        .expect(400, { response: 'Un des champs est manquant' }, done);
    });
    it('responds with json', function(done) {
        request(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .send({ email: 'jeremiegmail.com', pseudo: "Test", password: "test"})
        .expect(400, { response: 'Votre email ne correspond pas au format d\'un email' }, done);
    });
});
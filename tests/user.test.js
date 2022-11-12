const request = require('supertest');
const app = require('./../src/app');
const User = require('./../src/models/user');

const userOne = {
    name: 'Maike',
    email: 'mike@example.com',
    password: '56what!!',
};

beforeEach(async () => {
    await User.deleteMany();
    await User(userOne).save();
});

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Danyil',
        email: 'test@gmail.com',
        password: 'MyTestPass777!',
    }).expect(201);
});

test('Should log in existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password,
    }).expect(200);
});

test('Should not log in nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'worng@email',
        password: 'wrongPassword',
    }).expect(400);
});

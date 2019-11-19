const db = require('../data/dbConfig');

const userObject = {
    id: 1,
    username: 'testUser',
    password: 'testPass',
    email: 'testEmail',
};

describe('user-model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    it('should add a new user', async () => {
        await db('users').insert(userObject)
        let user = await db('users').first();
        expect(user).toEqual(userObject);
    })
})
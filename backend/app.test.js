const supertest = require("supertest");
const app = require("./server");




describe('POST Login', () => {
    let body = {
        email: '',
        password: ''
    }

    describe('Please fill all the fields', () => {
        test('Please fill all the fields', async() => {
            body = {
                email: '',
                password: ''
            }

            const res = await supertest(app).post('/api/auth/login').send(body)
            expect(res.statusCode).toBe(400)
        })
    })
})
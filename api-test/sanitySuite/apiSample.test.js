
const supertest = require('supertest')
const request = supertest('https://reqres.in/')




const TestData = require('../../test_data/data.json')



describe('API DEMO Test', () => {

    beforeAll(() => {

        console.log('Run befor Script');
    });
    afterAll(() => {
        console.log('Run after Script ');
    });

    test.each(TestData.user)('Post-Create a new user (%s)', async (user) => {

        const response = await request.post('api/users').send(user)
        expect(response.status).toBe(501);
        expect(response.body.name).toBe(user.name)
        console.log(response.body)


    });
    test('Get Users ', async ()=> {

        const response= await request.get(`api/users?page=${TestData.getUser.id}`)
        console.log(response.body)
        expect(response.status).toBe(200);
    
        
    });
   
});


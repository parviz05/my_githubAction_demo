var supertest = require('supertest')
const request=supertest('https://reqres.in/')

let job;
describe('API DEMO Test', () =>{


    beforeAll(() =>{

        console.log('Run befor Script');
    });
    afterAll(()=>{
        console.log('Run after Script ');
    });
    

    

test('Get All Users ', async ()=> {

    const response= await request.get('api/users?page=2')
    console.log(response.body)
    expect(response.status).toBe(200);

    
})


// if you want to validate each page separatelly use bellow function. Instead of using generic way like using lop statement we prefer jest methods 

test.each([1,2,3])('Get All Users from page (%s) ', async (page)=> {

    const response= await request.get(`api/users?page=${page}`)
    console.log(response.body)
    expect(response.status).toBe(200);

    
})

// //======> OR

test.each(Array.from(Array(5).keys()))('Get All Users from page (%s) ', async (page)=> {

        const response= await request.get(`api/users?page=${page}`)
        console.log(response.body)
        expect(response.status).toBe(200);
    
        
    })

// test('Post-Create a new user', async ()=>{
//     let user ={
//         "name" : "morphose",
//         "job" : "leader"
//     }
//     const response = await request.post('api/users').send(user)
    
//     expect(response.status).toBe(201);
//     expect(response.body.name).toBe("morphose")
//     job=response.body.job


// });


// // //creating multiple users using array in method signature 

test.each([["Alex","Manager"],["Paul","Architec"],["Sam","Lead"]])('Post-Create a new users (%s)', async (name,job)=>{
    let user ={
        "name" : `${name}`,
        "job" : `${job}`
    }
    const response = await request.post('api/users').send(user)
    
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(name)
    console.log(response.body)


});

test('PUT-Update User', async()=>{

    let updateUser= {
        "name" : "STED",
        "job" : `${job}`
    }
    const response = request.put('api/users/2').set("Authontication","Value").send(updateUser)

});

});

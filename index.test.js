//2. importeren
const add = require("./index").add;
const findByName= require("./index").findByName;




//const {add, findByName} = require("./index");





test("add() function should return the sum of 3 numbers", () => {


    // Write me here




});




test('findByName() returns an object from an array with a specified name', ()=>{

   // ARRANGE
    const users =[
        {id:1,name:""},
        {id:2,name:''},
        {id:3,name:''}
        ];
    const userNameToFind = "";



 // ACT
  const user = findByName(users,userNameToFind);

 // ASSERT
expect(user).toEqual({id:1, name:""});

});


test('findByName should return null, if the element is not found',() =>{



// ARRANGE
    const users =[
        {id:1,name:'Rachid'},
        {id:2,name:'Brahim'},
        {id:3,name:'Batoul'}
    ];
    const userNameToFind = "Hans";



    //ACT
    const user = findByName(users,userNameToFind);

    //ASSERT
    expect(user).toBeNull();

});





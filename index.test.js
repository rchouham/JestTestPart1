//2. importeren
const add = require("./index").add;
const findByName= require("./index").findByName;
const nameAge=require("./index").nameAge;



//const {add, findByName} = require("./index");





test("add() function should return the sum of 4 numbers", () => {


    // console.log("hallo dit is een test,echt waar")
    // ARRANGE
    const number1 = 4
    const number2 = 5
    const number3 = 9



    // ACT
     const sum = add(number1,number2,number3)



   // ASSERT (bewering/ik verwacht)
    expect(sum).toBe(18)   // expect en toBe komen uit jest!

});




test('findByName() returns an object from an array with a specified name', ()=>{

   // ARRANGE
    const users =[
        {id:1,name:"Rachid"},
        {id:2,name:'Brahim'},
        {id:3,name:'Batoul'}
        ];
    const userNameToFind = "Rachid";



 // ACT
  const user = findByName(users,userNameToFind);

 // ASSERT
expect(user).toEqual({id:1, name:"Rachid"});

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





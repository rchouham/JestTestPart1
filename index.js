function add(num1, num2){
    // console.log("INPUT", num1,num2)
    const sum =num1 +num2;
// console.log("SUM", sum)
    return sum
}

console.log(add(1,2));

//1 .exporteren

module.exports ={
    add:add,
    findByName:findByName,
}

function findByName (users, name) {
    // console.log('INPUT:',users, name);
    // 1. [X] loop maken.
    // 2. [X]if statement : is de name hetzelfde als de naam uit het object?
    // 3. [X] zo ja return dat object.


    for (let index = 0; index < users.length ; index++) {
        const user= users[index];
        //console.log("USER 1 voor 1?",user.name);
        if (user.name === name){
            // console.log("GEVONDEN",user);
            return user;

        }
    }

    return  null;

}
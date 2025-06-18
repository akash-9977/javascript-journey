const accountId = 155523
let accountEmail = "akashthakur@gmail.com"
var accountPassword = "12345"
accountCity = "noida"
let accountState;

//accountId = 22

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "akash@gmail.com"
accountPassword = "12"
accountCity = "greater noida"

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
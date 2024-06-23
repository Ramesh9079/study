const accountId = 144553
let accountEmail  = "ramesh@google.com"
var accountPassword = "12345"
accountCity = "Manipur"
let accountState;

// accountId = 2 // not allowed
// {} => scope 

accountEmail = "hc@hc.com"
accountPassword = "212122"
accountCity = "Hyderabad"
console.log(accountId);
/*
Note: Prefert not to use var beacuse of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
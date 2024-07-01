const accountId = 144553
let accountEmail = "Joy@google.com"
var accountPassword = "1234"
accountCity = "Kolkata"
let accountState;

// accountId =2 // not allowed


accountEmail = "jg@jg.com"
accountPassword = "21212121"
accountCity = "Bangaluru"

console.log(accountId)

/*
 Prefer not to use var
 because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
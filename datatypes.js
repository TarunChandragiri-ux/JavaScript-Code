const accountId = 1234;
let accountEmail = "tarun@gmail.com";
var accountPassword = "12345";
console.log(accountEmail);
// console.table(accountId,accountEmail,accountPassword);

// Data types
// primitive datatypes = call by value
//  
let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let xyz = null; // datatypes in object it is a standalone value
let occupation; // undefined datatype
// Symbol = unique
// BigInt
console.log(typeof age);  

// non primitive = refference 
// array, objects , functions







// ****************

// memory
// stack(primitive) , heap (non -primitive)
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename;
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);
let userOne = {
    email: "user@google.com",
upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
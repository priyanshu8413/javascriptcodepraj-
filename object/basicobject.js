//singleton

//object literals
const mySym =Symbol("key1")
const jsUser={
    name:"Hitesh",
    [mySym]:"mykey1",

    age:20,
    location:"Chhapra",
    email:"praj@google.com",
    isLoggedIn: false,
    LastLoginDays :["Monday","Saturday"]

}
//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser[mySym])

jsUser.email="hitesh@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email ="hitesh@microsoft.com"
//sconsole.log(jsUser)
jsUser.greeting = function(){
    console.log("Hello JS USER");
}
jsUser.greetingTwo =function(){
    console.log(`Hello JS USER,${this.name}`);
}
console.log(jsUser.greetingTwo()); 
console.log(jsUser.greeting());
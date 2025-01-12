const score =100;
const ScoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=1232922832008120n

//array ,object,function
const heros=["shaktiman","naagraj","doga"];
let myObj={
    name: "Praj",
    age:20,


}

const myfunction=function(){
    console.log("Hello World")

}
console.log(typeof isLoggedIn)



// **********************************************************
//stack heap
let myYoutubename="prajkomalomdmpmnvdslsmpsmc"
let anothername=myYoutubename
anothername="pruytrjdbdjjjeh"
console.log(myYoutubename);
console.log(anothername);
let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="praj@google.com"
console.log(userOne.email)
console.log(userTwo.email)
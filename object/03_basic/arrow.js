const user={
    username: "Priyanshu",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username="sam"  // output sam,welcome to website
//{
    //username: 'sam',
    //price: 999,
    //welcomeMessage: [Function: welcomeMessage]
 // }
//user.welcomeMessage()

//console.log(this);//output {}

//function praj(){
  //  let username="Praj"
    //console.log(this.username);
//}

//praj()

//const chai=function(){
  //  let username="hitesh"
    //console.log(this.username);
//}  //output undefined

const chai =  () => {
    let username="hitesh"
    console.log(this.username);
}


//chai()

//const addTwo = (num1,num2) => {
    //return num1 + num2
//}

//const addTwo =(num1,num2) =>   num1 +num2
const addTwo =(num1,num2) =>  ({username:"Priyanshu"})

console.log(addTwo(3,4))


//const myArray=[2,5,3,7,8]

//myArray.forEach()
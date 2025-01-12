function sayMyname(){
    console.log("p")
    console.log("R")
    console.log("A")
    console.log("J")
  }
  
 //sayMyname() 
 //function addTwoNumber(number1,number2){
   //console.log( number1 + number2)
 //}
 function addTwoNumber(number1,number2){
    let result= number1 + number2
    return result
  }
  const result=addTwoNumber(4,8)
  //console.log("Result:",result)

  function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
  }
 // console.log(loginUserMessage("Priyanshu"))
// console.log(loginUserMessage())  //output undefined


function calculateCartPrice(...num1){//...->rest operator 
return num1
}
//console.log(calculateCartPrice(200,400,500,4000))
const user={
  username: "hitesh",
  price:199
}
function handleObject(anyobject)
{
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
  username:"Praj",
  price:399
})
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(getArray))







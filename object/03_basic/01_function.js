function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("J")
}

sayMyName()

//function addTwoNumbers(number1,number2){
  //  console.log(number1+number2);
//}

//const result=addTwoNumbers(5,6)
//console.log("Result:",result)
function addTwoNumbers(number1,number2){
     let result=number1 +number2
     //console.log("Priyanshu")
     return result
  }
  const result=addTwoNumbers(5,6)
//console.log("Result:",result)

function loginUserMessage(username="sam"){
    if(!username){
       console.log("please Enter a username") 
       return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Priyanshu"))
console.log(loginUserMessage())


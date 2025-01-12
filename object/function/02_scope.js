//let a= 10
//const b=20
//var c=30
let a=300

//console.log(a);

if(true){
    let a= 10
const b=20
//console.log("Inner:",a)

}//{}=scope

//console.log(a);
//console.log(b);
//console.log(c);  

function one(){
    const username="Priyanshu"
    function two(){
        const website="Youtube"
        console.log(username);
    }
    //console.log(website)
    //two()

}
//one()

if(true){
    const username="Priyanshu"
    if(username==="Priyanshu")
    {
        const website=" Youtube"
        console.log(username + website)
    }
 //console.log(website)   
}

//console.log(username);
// +++++++++++++++++intresting+++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo=function(num){
    return num +2
}


addTwo(5)


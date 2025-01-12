let myDate =new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate)
//let myCreateDate =new Date(2023,0,23)
//let myCreateDate =new Date(2023,0,23,5,3)
//let myCreateDate =new Date("2023-01-23")
let myCreateDate =new Date("01-14-2023")

//console.log(myCreateDate.toLocaleString());
let myTimeStamp =Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
//`${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday: "long",

})

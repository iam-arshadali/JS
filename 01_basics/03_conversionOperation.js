{
    let score = 33
console.log(typeof score);
}
 {
    let score = "35"
    console.log(typeof score);
 }

 {
    let score = "37"
    let valueInNumber = Number(score)
    console.log(typeof valueInNumber);    
 }

 {
    let score = "40abc"
    let valueInNumber = Number(score)
    console.log(valueInNumber);     //type NAN  not a number
 }

 {
    let score = null
    let valueInNumber = Number(score)
    console.log(valueInNumber);     //its converting null to 0
 }

 {
    let score = undefined
    let valueInNumber = Number(score)
    console.log(valueInNumber);     //its converting undefined to NaN
 }


 // Num to Boolean

 let isLoggedIn = 1
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)
 ////Answer is true

 //string to boolean
 let a = ""
 let b = "Arshad"
  let aBoolean = Boolean(a)
  let bBoolean = Boolean(b)
 console.log(aBoolean);   //false
 console.log(bBoolean);    //true
 
 
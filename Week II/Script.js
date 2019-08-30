// Step 1//
console.log("Hello World")//English
console.log("سلام دنیا")//Persian
console.log("Привет, мир")//Russian
//Step 2//
 console.log("I'm awesome")/*The problem is the quotes in
javascript are treated the same way so you have to either change the quotes or 
escape them with \*/


//Step 3//

let x;
// initializing variable//
console.log('The value of my variable will be : 14')
console.log (x);
x=14;
console.log('The value of x is 14')
console.log(x)


//Step 4//


var y="Oboy";
console.log("the value of my string will be 'Oboy'")
console.log(y)
var y="Noboy";
console.log("the value of y will be 'noboy'")
console.log(y);

//Step 5//

var z=7.25;
console.log(z)
var a = z- 0.25;
console.log(a)
if (7.25>7){
    console.log(false)
}else{
    
    console.log (true)}
    var b=7.25;
//Step 6//

let Arrays=[]
console.log('the value of the arrays will be fruits')
console.log(Arrays)
let favAnmis=['Tiger','Eagle','Monkey']
console.log(favAnmis)
favAnmis.push('baby pig')
console.log(favAnmis)
 //Step 7//
 
 let myString = 'THis is a test';
 console.log(myString)
 myString.length
 console.log(myString.length)

//Step 8 //

let steve="The hair";
let john= 2;
let t= "yes";
let q="2";
console.log('The value of my variable steve is' + steve)
console.log('the value of my variable john is' + john)
console.log('The value of my variable t is ' + t)
console.log('The value of my variable q is ' + q)
console.log('the type of my variabel steve is string')
console.log('the type of my variable john is number')
console.log('the type of my variable t is boolean' )
console.log('the type of my variable q is  string')
console.log(typeof steve);
console.log(typeof john);
console.log(typeof t);
console.log(typeof q);
(typeof steve=== typeof john) ? console.log('Same type'): console.log('Noway Jose');
(typeof steve=== typeof t) ? console.log('Same type'): console.log('Noway Jose');
(typeof steve=== typeof q) ? console.log('Same type'): console.log('Noway Jose');
(typeof john=== typeof t) ? console.log('Same type'): console.log('Noway Jose');
(typeof john=== typeof q) ? console.log('Same type'): console.log('Noway Jose');
(typeof t=== typeof q) ? console.log('Same type'): console.log('Noway Jose');
//Step 9//

var g=7;
console.log(g%3);
console.log('% this divides the numbers and then gives us the remainings of the division.')
console.log('so in this case g is equal to 7 and 7 divided by 3 is not a full number and it has a remainder of 1')

//Step 10//

//10.1//
let myArray=["yeahboay",1,2,3,4,"ooh hell yea",true,null,undefined,]
console.log('so you obviously can store multiple data types in an array :  '+ [myArray])
//10.2 the only way we can test is using the if thing //
if (6/0===10/0){
    console.log(true)

}else{console.log(false)}

//it outputs true so you can actually do this 

//The End baby

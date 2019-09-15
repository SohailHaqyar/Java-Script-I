//The Homework for Week Three//
//Number I
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');
console.log(myString);
//Done

//Number II
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log('the value of the new array will be all the animals mentioned');
//what the fuck is the point of this;god fucking damn it
console.log(favoriteAnimals);
console.log('The array has a length of ' + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
//using indexof
console.log('the index of meerkat is ' + favoriteAnimals.indexOf('meerkat'));
//#done again//

//More Javascript : more like harder Javascript;

//Question Number I;

function Addition(a, b, c) {
	return a + b + c;
}
const theResult = Addition(1, 4, 64);
console.log(theResult);
//Done//

//Question Number II;

function colorCar(color) {
	return 'A ' + color + ' Car';
}
const test = colorCar('blue');
console.log(test);

//Done//

//Question Number III;

const meObject = {
	name: 'Sohail',
	age: 'Decline to state',
	looks: 'hehehehe handsome as fuck '
};
function cons(meObject) {
	console.log(meObject);
}
cons(meObject);

//Done//

//Question Number IV;

function vehicleType(color, type) {
	if (type === 1) {
		return 'A ' + color + ' car';
	} else {
		return 'A ' + color + ' motorbike';
	}
}
const func = vehicleType('greenish', 2);
console.log(func);
//Done //

//Question Number V;
console.log(3 === 3 ? 'yes' : 'no');

//Done

//Question Number VI;

function getVehicleName(type) {
	return type === 1 ? 'car' : 'vehicle';
}
function ageName(age) {
	if (age > 5) {
		return 'used';
	} else {
		return 'new';
	}
}
function vehicle(color, myArray, age) {
	return 'a ' + ageName(age) + ' ' + color + ' ' + getVehicleName(type);
}
console.log(vehicleType('red', 1, 6));

//Done//


//Question Number VII;

const myArray = [ "motorbike", "caravan", "bike"];
//You use .splice to get rid of an element//
//Done//

//Question VIII;
//You use .splice to get rid of an element//
//Done I think//


//Question VIV;
/*
const myArray=['car','bike','motor','truck'];
function getVehicleName(index){
    return myArray[index]
}
console.log(getVehicleName(0));*/
//An alternative way of doing this//
const myArray = [ "motorbike", "caravan", "bike"];//the Array
function getVehicleByIndex(index) {
    return myArray[index - 1];
}
function getVehicleCondition(age) {
    if(age>5) {
        return 'used'
    } else {
        return 'new';
    }
}
function vehicleType(color, typeIndex, age) {
    return 'a ' + getVehicleCondition(age) + ' ' + color + ' ' + getVehicleByIndex(typeIndex);
}
function advertisment(vehicles) {
    let message = "Amazing Joe's Garage, we service";
    if (vehicles.length === 1) {
        return message + ' ' + vehicles[0];
    }
    for (let i = 0; i < vehicles.length; i++) {
        const vehicle = vehicles[i];
        if (i === vehicles.length - 1) {
            const messageWithoutTrailingComma = message.substr(0, message.length - 1);
            message = `${messageWithoutTrailingComma} and ${vehicle}s.`;
        } else {
            message += ` ${vehicle}s,`;
        }
    }
    return message;
}
console.log(vehicleType("red", 1, 6));
console.log(advertisment(myArray));




//Question XII;

const myEmptyObject= {

}
//Done//

//Question XIII,XIV;
const myTeachers= {
                    Zohir: 'Html,Css,Javascript' ,
                    AbRahman:'Html,css',
                    Mohamad:'Javascript',
                    Johneyboy: 'Javascript',

                    }               

//Done//
//Question XV//

let x = [1,2,3];
let y = [1,2,3];
let z = y;

(x==y)? console.log(true):console.log(false);
(x===y) ? console.log(true):console.log(false);
//Done//

//Question XVI//
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;


o2 = { famas: 'holy fuckkkk' };
o1 = { ak47: 'Damito cosita' };

console.log(o1);

console.log(o2);

console.log(o3);

alert('The o1 and o2 changes dont matter apparently ')


//Done//

//Question XVII
let bar = 42;
typeof typeof bar;

console.log(typeof typeof bar)
//it returns foo bar//
//maybe because when you look for its type twice it gives you a foo which probably is another type of data.//
//done

















/*   FizzBuzz HW assignment 

function fizzBuzz () {
    for (i=1; i <= 100; i++) {
        if (i%3 == 0 && i%5 == 0) { //  could also be if (i%15 == 0)
            console.log("FizzBuzz")
        }else if (i%5 == 0){
            console.log("Buzz")
        } else if  (i%3 == 0) {
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
}

console.log(fizzBuzz()) */

function evenTillnoMod() {
    for (i = 0; i <= 50; i+=2) {
            console.log(i)
    }
}
evenTillnoMod()

function evenTill() {
    for (i = 0; i <= 50; i++) {
        if (i%2==0) {
            console.log(i)
        }
    }
}
evenTill()

function oddTill() {
    for (i = 0; i <= 13; i++) {
        if (i%2==1) {
            console.log(i)
        }
    }
}

oddTill()

myArray= ["Bob","John","Carlos","Jim"]

function callAll() {
    for (i = 0; i < myArray.length; i++) {
            console.log(myArray[i])
    }
}

callAll()

var myNewArray = [];

function addInt(x, y, z) {
    myNewArray.push(x, y, z);
    console.log(myNewArray)
}

addInt(5, 3, 1)
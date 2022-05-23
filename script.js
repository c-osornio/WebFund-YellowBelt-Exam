var cookie = document.querySelector("#cookie")

function hide() {
    cookie.remove()
}

function empty(){
    alert("Your cart is empty!")
}

var succulent = document.querySelector("#succulent")

function changeImg() {
    succulent.src = "assets/succulents-2.jpg"
}

function changeBack() {
    succulent.src = "assets/succulents-1.jpg"
}


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

console.log(fizzBuzz()) 





*/

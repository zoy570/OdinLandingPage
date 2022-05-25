
function add7(x) {
     console.log( x + 7);
 }

 add7 (4);

 function multiply(x,y){
     var multiply = x * y;
     console.log(multiply)
 }
 multiply(2,4)


function capitalize (string){
    var capital = (string[0].toUpperCase());
    lowerCase = string.slice(1,0);
    titleCase = capital + lowerCase;
    console.log(titleCase);
}
capitalize("asdfasdfasdf");

function lastLetter (string){
    var finalLetter = string.length;
    console.log(string[finalLetter -1]);

}
lastLetter("sdfasdfadsfZ");


/* Odin Project Fizzbuzz Problme */

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++){
    if (i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
    
}


/* Understanding Errors */

// const a = "Hello";
// const b = "World";

// console.log(c)

/* ***** Reference Error ***** */

/* This is thrown when one refers to a variable that is not declared
and/or initialized within the current scope */

// const a = 5;
// const b = 10;

/*
function add(){
    return c;  // variable c is not defined
}

function print() {
    add();
}

print(); 
*/

/* ***** Syntax Errors ***** */

function helloWorld(){
    console.log "Hello Wolrd!"  //syntax error with ("Hello World");
}


/* ***** Type Error ***** */

const str1 = "Hello";
const str2 = "Wolrd";
const message = str1.push(str2); //str1.push is not a function, this is an Array method not string method
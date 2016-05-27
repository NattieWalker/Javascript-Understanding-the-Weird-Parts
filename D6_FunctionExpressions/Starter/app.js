var a = 6 * 3; // returns a value, this is a function

if (a === 3) { // just does work, this is a statemnt
 alert('hi');  
}

//this is a function statement
function greet() {
    console.log('hi'); 
}


//this is a function value
greet();


//Function expression with an anonymous function
var anonymousGreet = function() { //this variable contains a function object
    console.log('hi');
}
//this function expression above with return an object


//how do you invoke this function?

anonymousGreet(); //invoke this function here. 


//function statement
function log(a) {
    (a);
}

//a function expression create a function object on the fly. Example below

log(function(){
    console.log('hi');
});
//the above code, works a lof like an oject literarl.
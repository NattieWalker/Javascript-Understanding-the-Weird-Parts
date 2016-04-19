var a;

// goes to internet and looks for a value

a = "hi";
if(a) { //a will be converted to a Boolean
    console.log('Something is there')
}

// if tehre is a chance that a could be a 0 then  there could be a problem

// solution 
/*

if(a || a === 0) { //if a is something...

    console.log("Something is there");
}
*/

// in the above example, ==== runs first. 
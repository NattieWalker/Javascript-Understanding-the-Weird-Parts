function greet (name) {
    name = name || '<Your name here>'; // ES 6 has a way to do this. the way listed here is the current standard 
    console.log('Hello ' + name);
}

greet(); 

// remember, operators are functions that return values
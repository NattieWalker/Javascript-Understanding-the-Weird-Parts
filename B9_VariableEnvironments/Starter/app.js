//Playing with Execution Context, Variable Environments and Scope

function c() {
    var myVar = 16;
    console.log(myVar)
}

function b() {
    var myVar;
    console.log(myVar);
    c();
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
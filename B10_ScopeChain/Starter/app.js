function b() {  //lexically sits on top of A so it's outer enviroment it the Global //environment. (not inside any other function)
	console.log(myVar);   
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

// if I move function b inside of function a, the outer environemnt of b will hcange and then I can technically no longer call  function b  outside of function a. Then B will be declared undefined. 
//In this case function a  is visible lexically and not function b. 

// where somthing sit lexically is an easy way to see how something will be defined in the Scop Chain.   Think: Who created me? 
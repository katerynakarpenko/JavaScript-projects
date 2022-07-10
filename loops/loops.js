console.log("Task #1 \n");

let element = "";
let counter = 0;

while (counter < 7) {
	element += "#"; 
	console.log(element + "\n");
	counter +=1;
}

console.log("\n");
console.log("\n");


/////////////////////////////
console.log("Task #2 \n");
let i=0;
while (i < 100) {
	if ((i % 3 == 0)&&(i % 5 == 0)) {
		console.log("FizzBuzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
	i += 1;
}
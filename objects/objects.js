/////////////////////////////
console.log("Task #1 \n");

let array = [];
function range(start, end) {
	for (let i=start; i <= end; i++) {
		array.push(i);
	}
	return array;
}

let generalSum = 0;
function sum(arr) {
	for (let i=0; i < arr.length; i++) {
		generalSum += arr[i];
	}
	return generalSum;
}

let finalArray = range(1,10);
let finalSum = sum(finalArray);

console.log(finalArray);
console.log(finalSum);
console.log("\n");
console.log("\n");


console.log("Task #1-additional \n");
let arrayWithStep = [];

function rangeExtended(start, end, step=1) {
	if (start < end ) {
		arrayWithStep = [];

		let i=start;
		while (i<=end) {
			arrayWithStep.push(i);
			i += step;
		}
	} else {
		arrayWithStep = [];
		let i=start;
		while (i >= end) {
			arrayWithStep.push(i);
			i -= step;
		}
	}
	return arrayWithStep;
}

let arrayAsc = rangeExtended(1,10,2);
let arrayDes = rangeExtended(10, 1, 2);
console.log(arrayAsc);
console.log(arrayDes);
console.log("\n");
console.log("\n");

/////////////////////////////
console.log("Task #2 \n");





console.log("\n");
console.log("\n");

/////////////////////////////
console.log("Task #3.1 \n");




/////////////////////////////
console.log("Task #3.2 \n");


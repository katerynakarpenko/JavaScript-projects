/////////////////////////////
console.log("Task #1 \n");

let a = 10;
let b = 1;

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}
console.log("min(2, 14):" + min(2, 14));
console.log("min(a, b):" + min(+(prompt("Enter a")), +(prompt("enter b"))));
console.log("\n");
console.log("\n");

/////////////////////////////
console.log("Task #2 \n");
function isEven(n) {
	if (n== 0) {
		return true;
	} else if (n== 1) {
		return false;
	} else if (n<0) {
		return isEven(n+2);
	} else {
		return isEven(n-2);
	}
}
console.log("IsEven 50: " + isEven(50));
console.log("IsEven 75: " + isEven(75));
console.log("IsEven -3: " + isEven(-3));

console.log("\n");
console.log("\n");

/////////////////////////////
console.log("Task #3.1 \n");
let count = 0;
let string = "HHHBRBD";
function countBs(string) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] == "B") {
			count += 1;
		}
	}
	return count;
}
console.log("In string "+ `${string}`+" function countBs:"+  countBs(string));


/////////////////////////////
console.log("Task #3.2 \n");
let charCountSum = 0;
let testString = "HHHBRBD sfrfegergjkjuuewUJJJJ ckjkjkhi JUUUUU jjjd";
let char = "H";
function countChar(string, char) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] == char) {
			count += 1;
		}
	}
	return count;
}
console.log("In string "+ `${testString}`+" function countBs:"+  countChar(testString, char));
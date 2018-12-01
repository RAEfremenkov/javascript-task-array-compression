const output = (test) => {
	if (test.length === 0) {
		return test;
	}
	
	let from = test[0];
	let result = [];
	
	test.reduce((prev, curr, i, arr) => {
		const isLast = i === arr.length - 1;
		
		if (curr - prev > 1) {
			let push = (from === prev) ? from : from + '-' + prev;
			result.push(push);
			from = curr;
		}
		
		if (isLast) {
			let push = (curr - prev > 1) ? curr : from + '-' + curr;
			result.push(push);
		}
		
		return curr;
	});
	
	return result;
}

let test = [1, 2, 3, 4, 5, 6, 7, 10, 96];
console.log(output(test));
// ["1-7", 10, 96]

test = [1, 2, 3, 4, 5, 6, 7, 10, 11, 96];
console.log(output(test));
// ["1-7", "10-11", 96]

test = [1, 2, 3, 4, 5, 6, 7, 10, 11, 96, 97];
console.log(output(test));
// ["1-7", "10-11", "96-97"]

test = [1, 2, 3, 4, 5, 6, 7, 10, 11, 96, 97, 98];
console.log(output(test));
// ["1-7", "10-11", "96-98"]

test = [1, 2, 5, 6, 7, 10, 11, 96];
console.log(output(test));
// ["1-2", "5-7", "10-11", 96]

test = [1, 5, 6, 7, 10, 96];
console.log(output(test));
// [1, "5-7", 10, 96]

test = [];
console.log(output(test));
// []

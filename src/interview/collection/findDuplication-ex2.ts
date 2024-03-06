///
/// ```bash
/// pnpm ts-node ./src/findDuplication-ex2.ts --outfile  ./dist/findDuplication-ex2.js
/// ```
///
/*let check_duplicate_in_array = (input_array) => {
	let duplicate_elements = [];
    var num=0;
    var num2=0;
	for (num in input_array) {
		for (num2 in input_array) {
			if (num === num2) {
				continue;
			}
			else {
				if (input_array[num] === input_array[num2]) {
					duplicate_elements.push(input_array[num]);
				}
			}
		}
	}
	return [...new Set(duplicate_elements)];
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));
*/
// Next Solution
/*let check_duplicate_in_array = (input_array) => {
	input_array = input_array.sort((a, b) => a - b);
	let duplicate_elements = []
	for (index in input_array) {
		if (input_array[index] ===
			input_array[index - 1]) {
			duplicate_elements.push(
				input_array[index]);
		}
	}
	return [...new Set(duplicate_elements)];
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));
*/

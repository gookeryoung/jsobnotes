const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2);
// false

// 循环比较
const compare = (arr1 = [], arr2 = []) => {
	if (arr1.length != arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; ++i) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}
console.log(compare([1, 2, 'a'], [1, 2, 'a']));
// true
console.log(compare([1, 2], [1, 2, 3]));
// false
console.log(compare([1, 2, 3], [1, 2, 4]));
// false

// 转换后比较, 但是不能避免出错
console.log([1, 2, 3].toString() === [1, 2, 3].toString());
// true
console.log([1, 2, '3'].toString() === [1, 2, 3].toString());
// true
console.log(compare([1, 2, '3'], [1, 2, 3]));
// false
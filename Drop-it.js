function dropElements(arr, func) {
  // Drop them elements.
  var i = 0;
  while (i < arr.length) {
    if (!func(arr[i])) {
      arr.shift();
    } else {
      break;
    }
  }
  return arr;
}
// Examples
dropElements([1, 2, 3, 4], function (n) { return n >= 3; }); // returns [3, 4]
dropElements([0, 1, 0, 1], function (n) { return n === 1; }); // returns [1, 0, 1]
dropElements([1, 2, 3], function (n) { return n > 0; }); // returns [1, 2, 3]
dropElements([1, 2, 3, 4], function (n) { return n > 5; }); // returns []
dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }); // returns [7, 4]
dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }); // returns [3, 9, 2]
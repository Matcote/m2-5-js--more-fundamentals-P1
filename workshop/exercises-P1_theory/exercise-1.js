// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));
//decrement(3) returns 2 (3-1)
//square(decrement(3)) returns 4 (2*2)
//decrement(square(decrement(3))) returns 3 (4-1)
//square(decrement(square(decrement(3)))) returns 9 (3*3) FINAL RETURN

// 1-2
decrement(decrement(square(square(3))));
//square(3) returns 9 (3*3)
//square(square(3)) returns 81 (9*9)
//decrement(square(square(3))) returns 80 (81-1)
//decrement(decrement(square(square(3)))) returns 79 (80-1) FINAL RETURN

// 1-3
duplicateString(reverseString("hello"));
//reverseString('hello') returns 'elloH'
//duplicateString(reverseString('hello')) returns 'elloHelloH'

// 1-4
reverseString(duplicateString(duplicateString("foo")));
//duplicateString('foo') returns 'foofoo'
//duplicateString(duplicateString('foo')) returns 'foofoofoofoo'
//reverseString(duplicateString(duplicateString('foo'))) returns 'oofoofoofoof'

// Create fibs function that takes a number and returns an array containing that many numbers from the fibonacci sequence

function fibs(number) {
  const array = [];
  if (number <= 0) return "Enter a positive integer";
  if (number >= 1) array.push(0);
  if (number >= 2) array.push(1);
  for (let i = 2; i < number; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}

console.log(fibs(10)); // Return [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(fibs(1)); // Return [ 0 ]
console.log(fibs(0)); // Return "Enter a positive integer"
console.log(fibs(2)); // Return [ 0, 1 ]
console.log(fibs(5)); // Return [ 0, 1, 1, 2, 3 ]

// Create a fibsRec function that solves the same problem with recursion

function fibsRec(number) {
  if (number <= 0) return "Enter a positive integer";
  if (number === 1) return [0];
  if (number === 2) return [0, 1];
  return [
    ...fibsRec(number - 1),
    fibsRec(number - 1)[number - 2] + fibsRec(number - 1)[number - 3],
  ];
}

console.log(fibsRec(10)); // Return [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(fibsRec(1)); // Return [ 0 ]
console.log(fibsRec(0)); // Return "Enter a positive integer"
console.log(fibsRec(2)); // Return [ 0, 1 ]
console.log(fibsRec(5)); // Return [ 0, 1, 1, 2, 3 ]

// Make a merge sort function

function mergeSort(array) {
  const length = array.length;
  if (length === 1) return [...array];
  if (length !== 0) {
    const middle = Math.floor((length - 1) / 2);
    const leftSide = array.slice(0, middle + 1);
    const rightSide = array.slice(middle + 1, length);
    const sortedLeft = mergeSort(leftSide);
    const sortedRight = mergeSort(rightSide);
    return merge(sortedLeft, sortedRight);
  }
  return "Array cannot be empty.";
}

// Define a function that let you merge and order 2 arrays

function merge(arrayOne, arrayTwo) {
  let i = 0;
  let j = 0;
  let k = 0;
  const mergedArray = [];
  const lengthOne = arrayOne.length;
  const lengthTwo = arrayTwo.length;

  while (i < lengthOne && j < lengthTwo) {
    if (arrayOne[i] <= arrayTwo[j]) {
      mergedArray[k++] = arrayOne[i++];
    } else {
      mergedArray[k++] = arrayTwo[j++];
    }
  }

  for (; i < lengthOne; i++) {
    mergedArray[k++] = arrayOne[i];
  }

  for (; j < lengthTwo; j++) {
    mergedArray[k++] = arrayTwo[j];
  }

  return mergedArray;
}

console.log(mergeSort([5, 3, 10, 20, 1, 22, 11, 4, 7, 8, 99, 69])); // [1, 3, 4, 5, 7, 8, 10, 11, 20, 22, 69, 99]
console.log(mergeSort([])); // Array cannot be empty
console.log(mergeSort([5, 2, 3, 1, 7, 9, 6, 5])); // [1, 2, 3, 5, 5, 6, 7, 9]

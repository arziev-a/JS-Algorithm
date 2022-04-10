/*Find the index of the value with O(logN) time complexity*/

const search = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + right);
    if (arr[middle] < value) {
      left = middle + 1;
    } else if (arr[middle] > value) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7], 7));

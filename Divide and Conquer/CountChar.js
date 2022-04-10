function countChar(arr, value) {
  let position = search(arr, value); //in order to find indexOf duplicates we use search func
  let i = position;
  let left = i;
  let right = i;

  while (arr[left - 1] === value || arr[right + 1] === value) {
    if (arr[left - 1] === value) left--;
    if (arr[right + 1] === value) right++;
  }
  return right - left + 1;
}

// this is search func from previous topic.

function search(arr, value) {
  if (arr.length < 1) return -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (arr[middle] < value) {
      left = middle + 1;
    } else if (value < arr[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(countChar([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7], 6));

/* Problem desc:
  Given sorted array of integers and target average. 
  Determine if there is a pair of values in the array where 
  the average is equal to a target average. 
  Ex:
  avgPair([1, 2, 3], 2.5) //true

*/

function avgPair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) return true;
    else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

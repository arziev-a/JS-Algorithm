// extract odd numbers from Array using Recursion and helper function

function extractOddNumbers(arr) {
  const res = [];
  function helper(i) {
    if (i === arr.length) return;
    if (arr[i] % 2 !== 0) res.push(arr[i]);
    helper(i + 1);
  }
  helper(0);
  return res;
}

console.log(extractOddNumbers([1, 2, 3, 4, 5, 6, 7]));

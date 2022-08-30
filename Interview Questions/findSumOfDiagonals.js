function findDiagonalSum(arr) {
  let res = 0
  for (let i = 0; i < arr.length; i ++) {
    res += arr[i][i]
    res += arr[i][arr.length - 1 - i ]
  }
  return res
}

console.log(findDiagonalSum([[1,2,3], [5,6,7], [8,9,10]])) //logs 34
/*Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique 
values in the array. There can be negative numbers in the array, 
but it will always be sorted. */

const ex = [1,2,3,4,4,4,7,7,12,12,13]

function countUnique (arr) {
  if (arr.length === 0) return 0;
  
  let current = arr[0]
  let pointer = 0
  let count = 1

  while (pointer < arr.length) {
    if (arr[pointer] !== current) {
      current = arr[pointer]
      count ++
    }
    pointer ++
  }
  return count
}

console.log(countUnique(ex)) // Logs 7
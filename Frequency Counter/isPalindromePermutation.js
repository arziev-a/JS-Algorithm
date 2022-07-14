/*Given a string, write a function to check if it's a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards.

A permutation is a rearrangement of letters. The palindrome does not need to be limited
 to just dictionary words.

Constraints: string contains only letters from A to z and is not empty.

Use object properties as a key-value pairs. Ex:
isPalindromePermutation('Tact Coa') //true, permutations are 'taco cat', 'atco cta, 'tac ocat', etc

*/
function isPalindromePermutation(str) {
  //your code here
  const updatedStr = str.replace(/\s/g, "").toLowerCase();
  const obj = {};

  for (let i of updatedStr) {
    if (obj[i]) obj[i]++;
    else obj[i] = 1;
  }
  let check = 0;

  for (let i in obj) {
    if (obj[i] % 2 !== 0) {
      if (check) return false;
      else check = 1;
    }
  }
  return true;
}

console.log(isPalindromePermutation("Tact Coa"));

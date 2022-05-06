// Write a function called checkFrequency. Given two positive integers,
//  find out if the two numbers have the same frequency of digits.
// Ex:
// checkFrequency(182, 281) //true
// checkFrequency(22, 222) //false
function checkFrequency(firstNumber, secondNumber) {
  let obj = {};

  while (secondNumber > 0) {
    obj = convertNumToObj(firstNumber);
    while (secondNumber > 0) {
      let currentNum = secondNumber % 10;
      if (obj[currentNum]) {
        obj[currentNum]--;
      } else return false;
      secondNumber = parseInt(secondNumber / 10);
    }
  }

  for (let i in obj) {
    if (obj[i] !== 0) return false;
    else return true;
  }

  function convertNumToObj(num) {
    newObj = {};
    while (num > 0) {
      let currentNum = num % 10;
      if (newObj[currentNum]) {
        newObj[currentNum]++;
      } else {
        newObj[currentNum] = 1;
      }
      num = parseInt(num / 10);
    }
    return newObj;
  }
}

console.log(checkFrequency(182, 821));

/**
 * @param {number} x
 * @return {number}
 */

/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.*/

const minIntegerNumber = Math.pow(-2, 31) // -2147483648
const maxIntegerNumber = Math.pow(2, 31) - 1 // 2147483647

var reverse = function(x) {
  let string = Math.abs(x).toString()
  let res = ''

  for (let i = string.length - 1; i >=0; i --) {
    res = res + `${string[i]}`
  }
  if (x < 0) {
    res = '-' + res
    return Number(res) < minIntegerNumber ? 0 : res
  } else {
    res = Number(res)
    return res > maxIntegerNumber ? 0 : res
  }
}
const humanReadible = (number) => {
  let res
  let split
  let string = Math.abs(number).toString()
  
  if (string.includes('.')) {
    split = string.split('.')
    res = helper(split[0]) + `.${split[1]}`
  } 
  else res = helper(string)
  
  if (number < 0) res = '-' + res
  return res
}

const helper = (str) => {
  let res = ''
  let count = 0
  for (let i = str.length-1; i >= 0; i --) {
    if (count === 3) {
      res = ' ' + res
      count = 0
    }
    res = `${str[i]}` + res
    count ++
  }
  return res
}

console.log(humanReadible(-76532144.6789))
const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const arrCount = []
  arrCount.push(lines[0])
  const arr = []
  for (let i = 1; i < lines.length - 1; i++) {
    arr.push(lines[i])
  }

  if (Number(arrCount[0]) < 1 || Number(arrCount[0]) > 100) {
    return console.log('N Out of Range')
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 1 || arr[i] > 1000000) {
        return console.log('P Out of Range')
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(modCheck(Number(arr[i])))
  }
}

function modCheck(number) {
  const n = number
  const end = Math.ceil(n / 2)
  let mod = 0

  for (let i = 2; i <= end; i++) {
    if (n % i === 0) {
      mod++
    }
  }
  if (n === 1) {
    return 'Composite'
  } else if (mod < 1) {
    return 'Prime'
  } else {
    return 'Composite'
  }
}

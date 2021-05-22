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

function solve(input) {
  const tmp = input[0].split(' ')
  const n = Number(tmp[0])
  const m = Number(tmp[1])
  if (n < 1 || m > 1000000) {
    return console.log('over')
  }

  let narcissisticNumber = ''
  for (let i = n; i <= m; i++) {
    if (i === checkbox(i)) {
      narcissisticNumber += `${i} + '\n'`
    }
  }
  console.log(narcissisticNumber)
}

function checkbox(number) {
  let str = ''
  str = str + number
  let numbTmp = 0
  for (let i = 0; i < str.length; i++) {
    numbTmp = numbTmp + (Number(str[i]) ** str.length)
  }
  return numbTmp
}

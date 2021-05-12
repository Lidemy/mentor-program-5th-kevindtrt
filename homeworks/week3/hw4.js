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
  const str1 = input[0]
  const str2 = str1.split('').reverse().join('')
  const center = Math.floor(str1.length / 2)
  for (let i = 0; i < center; i++) {
    if (str1[i] !== str2[i]) {
      return console.log('False')
    }
  }
  return console.log('Ture')
}

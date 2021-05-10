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
  for (let i = 0; i < input.length; i++) {
    const tmp = input[i].split(' ')
    const a = Number(tmp[0])
    const b = Number(tmp[1])

    if (a === 0 && b === 0) {
      return
    }

    if (a > b) {
      console.log(a)
    } else {
      console.log(b)
    }
  }
}

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
  for (let i = 1; i <= Number(lines[0]); i++) {
    const tmp = lines[i].split(' ')
    console.log(compare(Number(tmp[0]), Number(tmp[1]), Number(tmp[2])))
  }
}

function compare(a, b, rule) {
  if (rule === 1) {
    if (a - b > 0) {
      return 'A'
    } else if (a - b < 0) {
      return 'B'
    } else {
      return 'DRAW'
    }
  } else {
    if (a - b > 0) {
      return 'B'
    } else if (a - b < 0) {
      return 'A'
    } else {
      return 'DRAW'
    }
  }
}

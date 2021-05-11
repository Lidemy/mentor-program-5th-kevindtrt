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
  const n = Number(input[0])
  let star = ''
  if (n < 1 || n > 30) {
    return
  }
  // console.log('n =' + n)
  for (let i = 1; i <= n; i++) {
    star += '*'
    console.log(star)
  }
}

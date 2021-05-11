// const aaa = 153

function checkbox(number) {
  let str = ''
  str = str + number
  const a = Number(str[0])
  const b = Number(str[1])
  const c = Number(str[2])
  const d = a ** 3 + b ** 3 + c ** 3
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(typeof d)
  console.log(number === d)
}
checkbox(153)
// console.log(n < 1)
// console.log(n > 30)

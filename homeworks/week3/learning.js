// const aaa = 153

function checkbox(number) {
  let str = ''
  str = str + number
  // const a =
  // const b =
  // const c =
  const d = Number(str[0]) ** str.length + Number(str[1]) ** str.length + Number(str[2]) ** str.length
  // 上面這串可以存成一個 for loop
  // console.log(a)
  // console.log(b)
  // console.log(c)
  // console.log(d)
  console.log(typeof d, d)
  console.log(number === d)
}
checkbox(153)
// console.log(n < 1)
// console.log(n > 30)

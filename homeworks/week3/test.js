// const n = 2

// console.log(`${n} x 1 = ${n * 1}`)
for (let k = 2; k < 10; k = k + 4) {
  // console.log('last = ' + k)
  for (let j = 1; j < 10; j++) {
    let strLine = ''
    for (let i = k; i < k + 4; i++) {
      // console.log('first1 =' + k)
      // console.log(`${i} x 1 = ${i * 1}`)
      const strTmp = `${i} x ${j} = ${i * j} \t`
      strLine += strTmp
      // console.log(strTmp)
    }
    console.log(strLine)
  }
  console.log('\n')
}

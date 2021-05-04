function reverse(str) {
    let strArr = []
    let newstr = ''
    for (let i=str.length ; i>=0; i--) {
      strArr.push(str[i])
          newstr += str[i]
    }
    console.log(newstr)  
    // 可以順利把字串反轉，但是不知道為何會有undefine 出現，求開示
}

reverse('hello');

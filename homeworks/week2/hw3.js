function reverse(str) {
    let newstr = ''
    let x = str.length -1
    for (let i= x ; i>=0; i--) {
        newstr += str[i]
    }
    console.log(newstr)  
    return 1
    
}

reverse('hello');

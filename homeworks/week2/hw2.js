function capitalize(str) {
    let newstr = ''
    if (str[0]>= 'a' && str[0]<= 'z') {
         newstr = str.replace(str[0], String.fromCharCode(str.charCodeAt(0) - 32)) 
    
         return newstr    
    } else return str   
    
}

console.log(capitalize('hello'));

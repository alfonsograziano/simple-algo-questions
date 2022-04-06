const sumOfDigits = n => {
    
    const str = n.toString()
    const value = str[0]
    const val = parseInt(value)

    if(str.length === 1) return val

    const newStr = str.substring(1, str.length)
    const integer = parseInt(newStr)

    return val + sumOfDigits(integer)
}

console.log(sumOfDigits(12345))
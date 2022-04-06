

const atoi = string => {
    if(string.length === 0) return null

    let value = null
    let multiplier = 1

    let myStr = string

    let sign = "+"
    if(string[0] === "-"){
        sign = "-"
        myStr = string.substring(1)
    }

    for(let i = myStr.length-1; i >= 0; i--){
        if(i === myStr.length-1){
            value = parseInt(myStr[i])
        }else{
            value += (myStr[i]*multiplier)
        }
        multiplier = multiplier*10
    }

    if(sign === "-") value *= -1

    console.log(value)
    return value
}


atoi("12345")
atoi("-12345")
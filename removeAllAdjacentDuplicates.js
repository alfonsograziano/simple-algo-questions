const inputs = [
    "cassa",
    "aab",
    "aaabccddd",
    "aa",
    "baab",
    "Mississippi"
]

//TODO: Reimplement with a stack approach :) 

const removeDuplicates = str => {
    let newStr = str

    for (let i = 0; i < newStr.length; i++) {
        if (i === newStr.length - 1) break

        if (newStr[i] === newStr[i + 1]) {
            let lastPart = ""
            if (i + 1 < newStr.length - 1) {
                lastPart = newStr.slice(i + 2, newStr.length + 1)
            }
            newStr = newStr.slice(0, i) + lastPart
        }
    }

    return newStr
}

const removeAdjacentduplicates = str => {
    let newStr = str
    let duplicatesFound = true

    while (duplicatesFound) {
        const result = removeDuplicates(newStr)
        duplicatesFound = result !== newStr
        newStr = result
    }

    return newStr
}


const removeAdjacentduplicatesStack = str => {
    const stack = []

    for(let i = 0; i < str.length; i++){
        if(stack.length === 0){
            stack.push(str[i])
        }else if(str[i] === stack[stack.length -1]){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }

    let result = ""
    stack.forEach(char => result+=char)
    return result 
}


inputs.forEach(input => {
    const result = removeAdjacentduplicatesStack(input)
    console.log(input, ": ", result)

})
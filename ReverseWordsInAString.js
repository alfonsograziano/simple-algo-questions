const reverseWords = str => {
    const separator = " "
    const words = []
    let currentWord = ""
    const sanified = str.trim()

    for (let i = 0; i < sanified.length; i++) {
        const char = sanified[i]
        if (char === separator) {
            if (currentWord !== "") {
                words.push(currentWord)
                currentWord = ""
            }
        } else {
            currentWord += char
        }
    }
    words.push(currentWord)


    let newString = ""
    for (let i = words.length - 1; i >= 0; i--) {
        newString += words[i] + " "
    }
    newString = newString.trim()
    return newString
}


console.log(reverseWords("coding is fun"))
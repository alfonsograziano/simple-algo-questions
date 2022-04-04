const arr = [
    "test",
    "testing",
    "testing whitebox",
    "testing blackbox"
]

const longestCommonPrefix = arr => {
    let commonPrefix = ""
    let common = true
    if (arr.length === 0) return commonPrefix

    let shortestStringLength = -1
    arr.forEach(item => {
        if (shortestStringLength === -1) shortestStringLength = item.length
        if (item.length < shortestStringLength) shortestStringLength = item.length
    })


    for (let i = 0; i < shortestStringLength; i++) {
        if (!common) break

        const char = arr[0][i]
        let match = true
        for (let j = 0; j < arr.length; j++) {
            if (!(char === arr[j][i] && common)) {
                common = false
                match = false
            }
        }

        if (match && common) commonPrefix += char

    }


    return commonPrefix
}

//Yeah i should make unit tests using jest or something but well... not this evening :) 
console.log("Result 1: ", longestCommonPrefix(arr))

console.log("Result 2: ", longestCommonPrefix([]))

console.log("Result 3: ", longestCommonPrefix(["a", "aa", "aaaa", "aaa"]))

console.log("Result 4: ", longestCommonPrefix(["a", "aa", "aaaa", "0aaa"]))

console.log("Result 5: ", longestCommonPrefix(["aaa", "aaa", "aaa", "aaa"]))

console.log("Result 5: ", longestCommonPrefix(["aaba", "aaca"]))
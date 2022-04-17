//udemy.com/course/coding-interview-question-data-structures-algorithm/learn/lecture/18089987
const zigZagPattern = (str, rows) => {
    const subStrings = []
    for (let i = 0; i < rows; i++) subStrings.push("")
    let currentRow = 0
    let rowDirection = 1

    for (let i = 0; i < str.length; i++) {
        subStrings[currentRow] += str[i]

        if (currentRow === 0) rowDirection = 1
        if ((currentRow + 1) === rows) rowDirection = -1
        currentRow += rowDirection
    }

    let newString = ""
    for (let i = 0; i < rows; i++) newString += subStrings[i]
    return newString
}

console.log(zigZagPattern("PAYPALISHIRING", 3))
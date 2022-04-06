/**
 * Input: an excel sheet column
 * Outpu: the number of the column 
 * 
 * E.g. input => "aa"
 *      output => 27 (a = 1) + (a on the second position = 26)
 */

const columnNumber = string => {

    const str = string.toUpperCase()

    let chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let number = 0
    let nextMultiplier = 1

    for(let i = str.length -1; i >= 0; i--){
        const weight = chars.indexOf(str[i])+1
        number += weight*nextMultiplier
        nextMultiplier *= chars.length
    }

    console.log(number)
    return number
}

columnNumber("aaa")
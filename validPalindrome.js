
const validPalindrome = str => {
    
    for(let i = 0; i < (str.length/2)+1; i++){
        if(str[i] !== str[str.length - 1 - i]) return false
    }

    return true
}


const validPalindromeR = str => {
    if(str.length===1)return true
    if(str.length === 2) return str[0] === str[1]

    return (str[0] === str[str.length-1]) && validPalindrome(str.split(0,-1))
}


console.log("aab: ", validPalindromeR("aab"))
console.log("aba: ", validPalindromeR("aba"))
console.log("anna: ", validPalindromeR("anna"))
console.log("ciao: ", validPalindromeR("ciao"))

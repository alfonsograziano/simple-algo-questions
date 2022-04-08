
const validPalindrome = str => {
    
    for(let i = 0; i < (str.length/2)+1; i++){
        if(str[i] !== str[str.length - 1 - i]) return false
    }

    return true
}





console.log("aab: ", validPalindrome("aab"))
console.log("aba: ", validPalindrome("aba"))
console.log("anna: ", validPalindrome("anna"))
console.log("ciao: ", validPalindrome("ciao"))

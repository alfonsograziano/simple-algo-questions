const findStringLength = string => {
    if(typeof string[0] === "undefined") return 0

    return 1+findStringLength(string.slice(1))

}

console.log(findStringLength("ciao"))

const string = ""

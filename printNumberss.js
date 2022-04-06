const printNumbers = n => {
    if (n === 1) return "1"
    return printNumbers(n - 1) + " " + n.toString()
}

console.log(printNumbers(10))
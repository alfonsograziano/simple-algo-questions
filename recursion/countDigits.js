const countDigits = n => {
    if (n < 10) return 1
    return 1 + countDigits(n / 10)
}


console.log(countDigits(10))
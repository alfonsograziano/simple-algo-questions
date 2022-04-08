const power = (n, p) => {
    if (p === 0) return 1

    return n * power(n, p-1)
}


console.log(power(5, 1))
console.log(power(5, 2))
console.log(power(100,0 ))
console.log(power(100, 1))
console.log(power(5, 5))



const multiply = (m, n) => {
    if (n === 1) return m
    return m + multiply(m, n - 1)
}

console.time("mul")
console.log(multiply(100, 1000))
console.timeEnd("mul")

console.time("mul2")
console.log(100*1000)
console.timeEnd("mul2")
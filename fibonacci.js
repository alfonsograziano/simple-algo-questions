const fib = n => {
    if(n === 0) return 0
    if(n === 1) return 1

    return fib(n-1)+fib(n-2)
}

const fibIt = n => {
    if(n === 0) return 0
    if(n === 1) return 1
    
    let first = 0
    let second = 1

    let sum = 0

    for(let i = 0; i < n; i++){
        if(i > 0){
            sum = first + second
            first = second
            second = sum
        }
    }

    return sum
}


console.time("It")
console.log(fibIt(1))
console.timeEnd("It")

console.time("Rec")
console.log(fib(1))
console.timeEnd("Rec")
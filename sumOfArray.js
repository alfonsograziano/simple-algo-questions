const sumOfArray = arr => {

    if (arr.length === 0) return null
    if (arr.length === 1) return arr[0]

    const copy = [...arr]
    copy.shift()

    return arr[0] + sumOfArray(copy)
}

console.log(sumOfArray([1,2]))
console.log(sumOfArray([1,2,3]))
console.log(sumOfArray([1,2,3,4,5]))
console.log(sumOfArray([]))
console.log(sumOfArray([1]))
console.log(sumOfArray([1,-1]))


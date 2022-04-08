const isArraySorted = array => {
    if(array.length === 0 || array.length === 1) return true
    if (array.length === 2)
        return array[0] <= array[1]

    const copy = [...array]
    copy.shift()

    return (array[0] <= array[1]) && isArraySorted(copy)
}


console.log(isArraySorted([0,1,2]))
console.log(isArraySorted([]))
console.log(isArraySorted([0]))
console.log(isArraySorted([0,2,1]))
console.log(isArraySorted([1,2,3,4,5,6,7,8,9,0]))
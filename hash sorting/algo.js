const hashSorting = (arr) => {
    if (arr.length === 0) return arr
    const map = new Map()

    let max = arr[0]
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
        map.set(arr[i], true)
    }

    const sorted = []

    for (let i = min; i <= max; i++) {
        if (typeof map.get(i) !== "undefined") {
            sorted.push(i)
        }
    }

    return sorted
}


// const arraySize = 100000
// //Set 0 as teoric start point
// const minElement = 0
// const maxElement = 1000000

// const density = (maxElement - minElement) / arraySize

// console.log(`Array size: ${arraySize}, array max element: ${maxElement}`)
// const arr = generateLargeArray(arraySize, maxElement)
// console.log(`Array real size: ${arr.length}`)

module.exports = {
    hashSorting
}
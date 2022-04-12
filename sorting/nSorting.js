const nSort = (arr) => {
    if(arr.length === 0) return arr
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
        if (map.get(i)) {
            sorted.push(i)
        }
    }

    return sorted
}




function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}


function mergeSort(array) {
    const half = array.length / 2

    // Base case or terminating case
    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}


const generateLargeArray = (n, max) => {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * max))
    }
    return [... new Set(arr)]
}

const areArrayEquals = (arr1, arr2) => {
    const maxLength = Math.max(arr1.length, arr2.length)
    let equal = true

    for (let i = 0; i < maxLength; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("Error found on index: ", i, " ", arr1[i], arr2[i])
            equal = false
        }
    }

    return equal
}



const hashSortingPaginated = (arr) => {
    if (arr.length === 0) return arr
    const map = new Map()
    const pages = new Map()

    const pageSize = 100

    let max = arr[0]
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
        map.set(arr[i], true)
        pages.set(parseInt(arr[i] / pageSize), true)
    }

    const maxPages = (max / pageSize) + 1
    const sorted = []
    let foundPages = 0

    for (let i = 0; i < maxPages; i++) {
        if (typeof pages.get(i) !== "undefined") {
            foundPages++
            for(let j = 0; j < pageSize; j++){
                const key = (i*pageSize)+j
                if (typeof map.get(key) !== "undefined") {
                    sorted.push(key)
                }
            }
        }
    }

    // console.log("Pages found: " + foundPages)
    // console.log("pages ratio: " + ((foundPages/maxPages)).toFixed(2))


    return sorted
}


const arraySize = 100000
const maxElement =100000000

console.log(`Array size: ${arraySize}, array max element: ${maxElement}`)
const arr = generateLargeArray(arraySize, maxElement)
console.log(`Array real size: ${arr.length}`)

// const arr = [100,200,350,500,750,1000]


console.time("Merge sort")
const sortedWithMerge = mergeSort([...arr])
console.timeEnd("Merge sort")


console.time("nSort")
const result = nSort([...arr])
console.timeEnd("nSort")


console.time("nSort paginated")
const result2 = hashSortingPaginated([...arr])
console.timeEnd("nSort paginated")

console.log("Checking for the correctness...")
const correct = areArrayEquals(sortedWithMerge, result)
console.log("Same results: ", correct)
const countOccorrence = (arr, el) => {
    if (arr.length === 0) return 0
    if (arr.length === 1) return arr[0] === el ? 1 : 0

    const current = arr[0] === el ? 1 : 0
    const subOcc = countOccorrence(arr.splice(1), el)

    return current + subOcc
}

console.log(countOccorrence([0, 1, 0, 3, 0], 0))
console.log(countOccorrence([0, 1, 0, 3, 0], 100))
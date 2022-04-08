const firstIndex = (arr, el) => {
    if (arr.length === 0) return -1
    if (arr.length === 1) return arr[0] === el ? 0 : -1
    if (arr[0] === el)  return 0

    const result = firstIndex(arr.slice(1), el)
    if (result === -1) return -1

    return 1 + result
}


console.log(firstIndex([1, 2, 3, 4, 5], 1))
console.log(firstIndex([1, 2, 3, 4, 5], 0))
console.log(firstIndex([1, 2, 3, 4, 5], 4))
console.log(firstIndex([1, 2, 3, 4, 5], 6))
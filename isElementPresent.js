
const isElementPresent = (arr, val) => {
    if (arr.length === 0) return false
    if (arr.length === 1) return arr[0] === val

    return (arr[0] === val) || isElementPresent(arr.slice(1), val)
}

console.log(isElementPresent([1, 2, 3, 4, 5], 6))
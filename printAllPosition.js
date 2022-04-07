const printAllPositions = (arr, item, n = 0) => {
    if (arr.length === 0) return
    if (arr[0] === item) {
        console.log(n)
    }

    printAllPositions(arr.splice(1), item, n + 1)

}

printAllPositions([1, 2, 1, 2,3,4,1], 1)
printAllPositions([0, 0, 0, 0, 0, 0], 1)
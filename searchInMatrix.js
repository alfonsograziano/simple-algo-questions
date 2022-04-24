//Staircase search
//https://www.youtube.com/watch?v=_G9hL1cA02s

//Go to top right
//Compare and if if < x move down
//If value > x move left

const searchInSortedMatrix = (matrix, target) => {
    let row = 0
    let col = matrix[0].length - 1

    while (row < matrix.length) {
        const item = matrix[row][col]
        if (item === target) return true
        if (item < target) row++
        if (item > target) col--
    }

    return false
}

const simpleMatrix = [
    [1, 2],
    [3, 4]
]

console.log(searchInSortedMatrix(simpleMatrix, 50))
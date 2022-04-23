//Rotate a n*n matrix clockwise
//I think my solution is better than the course one (in case you need to create a new matrix instead to swap the old matrix)
//Because I have O(n) instead O(n^2) time complexity and O(n) instead O(1) space complexity

const rotateMatrix = matrix => {
    if (matrix.length === 0) return []
    const newMatrix = []
    const nSize = matrix[0].length

    for (let i = 0; i < nSize; i++) {
        const currentRow = []

        for (let j = 0; j < nSize; j++) {
            const item = matrix[j][i]
            currentRow.unshift(item)
        }

        newMatrix.push(currentRow)
    }
    return newMatrix
}

const exampleMatrix = [
    [1, 2],
    [3, 4]
]

const complexMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const reallyComplesMatrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]

console.log(rotateMatrix(exampleMatrix))
console.log(rotateMatrix(complexMatrix))
console.log(rotateMatrix(reallyComplesMatrix))

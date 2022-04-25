//Input => m*n matrix | if matrix[i][j] = 0, make all row and column = 0
//n.b. you cannot return another matrix, you have to update the input matrix

const setMatrixZero = matrix => {

    //Create a "read only" copy of the input matrix => Space complexity O(n*m)
    const readOnlyMatrix = [] //Write cycle in order to copy
    for (let i = 0; i < matrix.length; i++) {
        const row = []

        for (let j = 0; j < matrix[i].length; j++)
            row.push(matrix[i][j])

        readOnlyMatrix.push(row)
    }


    //Cycle through the matrix
    //If in the read copy the value is 0, then put all the row and all the column to 0
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            //matrix[i][j]
            const value = readOnlyMatrix[i][j]
            if(value === 0){
                console.log("0 found")
                //put all the row as 0
                for(let row = 0; row < matrix.length; row++){
                    matrix[row][j] = 0
                }
                //put all the column as 0
                for(let col = 0; col < matrix[i].length; col++){
                    matrix[i][col] = 0
                }
            }
        }
    }

}


const exampleMatrix = [
    [0, 1, 2, 3, 0],
    [1, 2, 3, 0, 4],
    [1, 2, 3, 4, 5]
]

const matrixOne = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

//This problem could be solved in space complexity O(1)!
//The provided solution is really interesting and doesn't require a readonly copy of the matrix
setMatrixZero(matrixOne)
console.log(matrixOne)
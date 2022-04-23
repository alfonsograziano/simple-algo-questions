//Given a positive integer n and a string s (D or I), you have to find any permutation of first n positive integer that satisfy the given input string
//D means the next number is smaller, while I means the next number is greater

//E.g. n = 3 | s = ID => output: [1,3,2]

//E.g. n= 3 | s = II => output: [1,2,3]
//E.g. n= 3 | s = DD => output: [3,2,1]

//E.g. n= 5 | s = DIDD => output: [5,1,4,3,2]

const findPermutation = (n, str) => {
    let arr = []
    let solution = []
    for (let i = 0; i < n; i++) {
        arr.push(i + 1)
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "I") {
            solution.push(arr.shift())
        }
        if (str[i] == "D") {
            solution.push(arr.pop())
        }
    }
    solution.push(arr.pop())


    return solution
}

console.log(findPermutation(5, "DIDD"))

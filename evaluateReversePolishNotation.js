const input = ["1", "2", "+"]


const evaluateReverse = arr => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const symbols = ["+", "-", "/", "*"]

    let newArr = [...arr]

    //Loop the input 
    //Find a symbol
    //Create a string from the symbol and the two numbers on the left adding "(" and ")"
    //Update the array by removing the numbers and change with the computed string 
    //Continue while the length of the expression array is !== from 1

    while (newArr.length !== 1) {
        for (let i = 0; i < newArr.length; i++) {
            if (symbols.includes(newArr[i])) {
                const expression = `(${newArr[i - 2]}${newArr[i]}${newArr[i - 1]})`
                newArr[i] = expression
                newArr.splice(i - 1, 1);
                newArr.splice(i - 2, 1);
            }
        }
    }
    return newArr[0]
}

console.log(evaluateReverse(["1", "2", "+"]))
console.log(evaluateReverse(["4", "13", "5", "/", "+"]))
console.log(evaluateReverse(["2", "1", "+", "3", "*"]))
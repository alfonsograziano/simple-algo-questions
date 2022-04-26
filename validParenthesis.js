//Space => O(n) | Time => O(n)

//We could optimize this solution in the medium case 
const valid = str => {
    const stack = []

    for (let i = 0; i < str.length; i++) {
        if (stack.length === 0) {
            stack.push(str[i])
        } else {
            const topEl = stack[stack.length - 1]
            const el = str[i]
            if (topEl === "(" && el === ")") stack.pop()
            else if (topEl === "[" && el === "]") stack.pop()
            else if (topEl === "{" && el === "}") stack.pop()

            else stack.push(el)

        }
    }

    return stack.length === 0
}


const expression = "()[]{}{([])}"
console.log(valid(expression))

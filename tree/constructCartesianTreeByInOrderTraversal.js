
const TreeNode = require("./TreeNode")

const constructTree = inOrder => {
    if (inOrder.length === 0) return null
    if (inOrder.length === 1)  return new TreeNode(inOrder[0])

    const max = Math.max(...inOrder)
    const maxIndex = inOrder.findIndex(item => item === max)
    const root = new TreeNode(max)


    const left = constructTree(inOrder.slice(0, maxIndex))
    const right = constructTree(inOrder.slice(maxIndex + 1, inOrder.length))
    root.setLeft(left)
    root.setRight(right)

    return root
}



const inOrder = [9, 3, 15, 20, 7]
const inOrder2 = [1,4,5,3,7,9,0]

console.log(JSON.stringify(constructTree(inOrder2), undefined, 4))



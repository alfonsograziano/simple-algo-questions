
const TreeNode = require("./TreeNode")

const invertBinaryTree = t1 => {
    if(t1 === null) return null
    
    const t = t1.getLeft()
    t1.setLeft(t1.getRight())
    t1.setRight(t)

    invertBinaryTree(t1.getLeft())
    invertBinaryTree(t1.getRight())
    
}

const root = new TreeNode(1)
const left = root.addLeft(2)
const right =root.addRight(3)

left.addLeft(4)
left.addRight(5)

right.addLeft(6)
right.addRight(7)


console.log(invertBinaryTree(root))

console.log(root)
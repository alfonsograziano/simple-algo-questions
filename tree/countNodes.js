
const TreeNode = require("./TreeNode")

const countNodes = t => t == null ? 0 : 1 + countNodes(t.getLeft()) + countNodes(t.getRight())

const root1 = new TreeNode(1)
const left1 = root1.addLeft(2)
const right1 = root1.addRight(3)

left1.addLeft(4)
left1.addRight(5)

right1.addLeft(6)
right1.addRight(7)

console.log(countNodes(root1))
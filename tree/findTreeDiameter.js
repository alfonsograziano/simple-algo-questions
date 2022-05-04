
const TreeNode = require("./TreeNode")

//REEEEEALLY SLOW!
const findMaxDiameter = t => t === null ? 0 : Math.max(findDiameter(t.getLeft()), findDiameter(t.getRight()), findDiameter(t))
const findDiameter = t => findTreeHeight(t.getLeft()) + findTreeHeight(t.getRight())
const findTreeHeight = t => t === null ? 0 : Math.max(findTreeHeight(t.getLeft()), findTreeHeight(t.getRight())) + 1


const root1 = new TreeNode(1)
const left1 = root1.addLeft(2)
const right1 = root1.addRight(3)

left1.addLeft(4)
left1.addRight(5)

right1.addLeft(6)
right1.addRight(7)

console.log(findMaxDiameter(root1))
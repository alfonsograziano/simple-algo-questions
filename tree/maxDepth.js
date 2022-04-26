
const TreeNode = require("./TreeNode")

const maxDepth = t => {
    if (t === null) return 0
    return Math.max(maxDepth(t.getLeft()), maxDepth(t.getRight())) + 1
}

const root1 = new TreeNode(1)
const left1 = root1.addLeft(2)
const right1 = root1.addRight(3)

left1.addLeft(4)
left1.addRight(5)

const left2 = right1.addLeft(6)
right1.addRight(7)

const left3 = left2.addRight(8)
left3.addLeft(9)

console.log(maxDepth(root1))

const TreeNode = require("./TreeNode")

const preOrder = tree => {
    if (typeof tree === "undefined") return []
    if (tree.isLeaf()) return [tree.getValue()]

    return [tree.getValue(), ...preOrder(tree.getLeft()), ...preOrder(tree.getRight())]
}

const root = new TreeNode(1)
const left = root.addLeft(2)
const right = root.addRight(3)

left.addLeft(4)
left.addRight(5)

right.addLeft(6)
right.addRight(7)


console.log(preOrder(root))
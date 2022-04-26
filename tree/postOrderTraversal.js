//Left, Data, Right

const TreeNode = require("./TreeNode")

const postOrder = tree => {
    if (typeof tree === "undefined") return []
    if (tree.isLeaf()) return [tree.getValue()]

    return [...postOrder(tree.getLeft()), ...postOrder(tree.getRight()), tree.getValue()]
}

const root = new TreeNode(1)
const left = root.addLeft(2)
const right = root.addRight(3)

left.addLeft(4)
left.addRight(5)

right.addLeft(6)
right.addRight(7)


console.log(postOrder(root))
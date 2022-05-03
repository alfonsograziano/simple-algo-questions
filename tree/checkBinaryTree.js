//Our goal is to check if a binary tree is BST or not


const TreeNode = require("./TreeNode")

const isBST = (t1, min = -Infinity, max = Infinity) => {
    if (t1 === null) return true

    const left = t1.getLeft()
    const right = t1.getRight()

    if (left !== null) {
        if (left.getValue() > t1.getValue()) return false
        if (left.getValue() < min) return false
    }
    if (right !== null) {
        if (right.getValue() < t1.getValue()) return false
        if (right.getValue() > max) return false
    }
    return true && isBST(left, min, t1.getValue()) && isBST(right, t1.getValue(), max)
}

const root = new TreeNode(4)
const left = root.addLeft(2)
const right = root.addRight(6)

left.addLeft(1)
left.addRight(3)

right.addLeft(5)
right.addRight(7)


console.log(isBST(root))


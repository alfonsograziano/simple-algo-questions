
const TreeNode = require("./TreeNode")

const inOrder = tree => {
    if (typeof tree === "undefined") return []
    if (tree.isLeaf()) return [tree.getValue()]

    return [...inOrder(tree.getLeft()), tree.getValue(), ...inOrder(tree.getRight())]
}

//Solution using inOrder visit
const identicalBTree = (t1, t2) => {
    const result1 = inOrder(t1)
    const result2 = inOrder(t2)

    if (result1.length !== result2.length) return false

    for (let i = 0; i < result1.length; i++)
        if (result1[i] !== result2[i]) return false

    return true
}

//(Better) solution using recursion
const identicalBTreeRecoursive = (t1, t2) => {
    if (typeof t1 === "undefined" || typeof t2 === "undefined") return t1 === t2

    return (t1.getValue() === t2.getValue())
        && identicalBTreeRecoursive(t1.getLeft(), t2.getLeft())
        && identicalBTreeRecoursive(t1.getRight(), t2.getRight())
}


const root1 = new TreeNode(1)
const left1 = root1.addLeft(2)
const right1 = root1.addRight(3)

left1.addLeft(4)
left1.addRight(5)

right1.addLeft(6)
right1.addRight(7)


const root2 = new TreeNode(1)
const left2 = root2.addLeft(2)
const right2 = root2.addRight(3)

left2.addLeft(4)
left2.addRight(5)

right2.addLeft(6)
right2.addRight(7)




console.log(identicalBTreeRecoursive(root1, root2))
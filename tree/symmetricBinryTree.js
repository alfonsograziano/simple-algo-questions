const TreeNode = require("./TreeNode")

const helper = (t1,t2) => {
    if(t1 === null && t2 !== null) return false
    if(t2 === null && t1 !== null) return false
    if(t1 === null && t2 === null) return true

    if(t1.getValue() !== t2.getValue()) return false

    return helper(t1.getLeft(), t2.getRight()) && helper(t1.getRight(), t2.getLeft())


}


const symmetric = (t1) => {
    if(typeof t1 === "undefined") return false
    return helper(t1.getLeft(), t1.getRight())
}


const root = new TreeNode(1)
const left = root.addLeft(2)
const right = root.addRight(2)

left.addLeft(4)
right.addRight(4)


console.log(symmetric(root))

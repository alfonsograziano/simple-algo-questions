
const TreeNode = require("./TreeNode")

const levelOrderTraversal = t => {
    const queue = []
    queue.push(t)

    while(queue.length !== 0){
        const node = queue.shift()
        console.log(node.getValue())
        if(node.getLeft() !== null) queue.push(node.getLeft())
        if(node.getRight() !== null) queue.push(node.getRight())
    }
    
}

const root = new TreeNode(1)
const left1 = root.addLeft(2)
const right1 = root.addRight(3)

const left1_2 = left1.addLeft(4)
const right1_2 = left1.addRight(5)


levelOrderTraversal(root)
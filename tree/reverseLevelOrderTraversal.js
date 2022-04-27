const TreeNode = require("./TreeNode")


const reverseLevelOrderTraversal = t => {
    const queue = []
    const stack = []
    queue.push(t)

    //Populate the queue
    while (queue.length !== 0) {
        const node = queue.shift()
        //When I shift, i push the data in a stack
        stack.push(node)
        if (node.getLeft() !== null) queue.push(node.getLeft())
        if (node.getRight() !== null) queue.push(node.getRight())
    }
    

    //Empty the stack
    while(stack.length !== 0){
        console.log(stack.pop().getValue())
    }
}



const root = new TreeNode(1)
const left1 = root.addLeft(2)
const right1 = root.addRight(3)

const left1_2 = left1.addLeft(4)
const right1_2 = left1.addRight(5)

reverseLevelOrderTraversal(root)
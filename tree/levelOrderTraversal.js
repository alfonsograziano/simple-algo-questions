
const TreeNode = require("./TreeNode")

const levelOrderTraversal = t => {
    const queue = []
    queue.push(t)
    queue.push(null)


    while(queue.length !== 0){
        const node = queue.shift()
        if(node !== null){
            process.stdout.write(node.getValue() + " ")
            if(node.getLeft() !== null) queue.push(node.getLeft())
            if(node.getRight() !== null) queue.push(node.getRight())
        }else{
            if(queue.length === 0) return 
            process.stdout.write("\n")
            queue.push(null)
        }
       
    }
    
}

const root = new TreeNode(1)
const left1 = root.addLeft(2)
const right1 = root.addRight(3)

const left1_2 = left1.addLeft(4)
const right1_2 = left1.addRight(5)

const left1_2_3 = left1_2.addLeft(6)


levelOrderTraversal(root)
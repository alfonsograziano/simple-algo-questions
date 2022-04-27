
const TreeNode = require("./TreeNode")

//Using recursion, not so great as solution
const minDepth = t => {
    if (t === null) return 0
    return Math.min(minDepth(t.getLeft()), minDepth(t.getRight())) + 1
}

//Using level order traversal
const minDepthLOT = t => {
    const queue = []
    let minDepth = 1
    queue.push(t)
    queue.push(null)


    while(queue.length !== 0){
        const node = queue.shift()
        if(node !== null){
            // process.stdout.write(node.getValue() + " ")
            if(node.getLeft() === null && node.getRight() == null) return minDepth
            if(node.getLeft() !== null) queue.push(node.getLeft())
            if(node.getRight() !== null) queue.push(node.getRight())
        }else{
            if(queue.length === 0) return 
            // process.stdout.write("\n")
            queue.push(null)
            minDepth++
        }
       
    }
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

console.log(minDepthLOT(root1))
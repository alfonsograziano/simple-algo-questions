const TreeNode = require("./TreeNode")



const leastCommonAncestor = (t1, n1, n2) => {

    let ancestors = []

    const findAncestor = (node, toFind) => {
        if (node === null) return
        if (node.getValue() === toFind) return true

        const leftAnc = findAncestor(node.getLeft(), toFind)
        const rightAnc = findAncestor(node.getRight(), toFind)

        if (leftAnc || rightAnc) {
            ancestors.unshift(node.getValue())
            return true
        }

        return false

    }


    findAncestor(t1, n1)
    const n1Ancestor = ancestors
    ancestors = []

    findAncestor(t1, n2)
    const n2Ancestor = ancestors
    ancestors = []

    console.log(n1Ancestor, n2Ancestor)

    let lastEqualIndex = 0
    //Tree root
    let leastCommonAncestor = n1Ancestor[lastEqualIndex]
    while (lastEqualIndex !== -1) {

        lastEqualIndex++

        if (lastEqualIndex > n1Ancestor.length-1 ||
            lastEqualIndex > n2Ancestor.length-1 ||
            n1Ancestor[lastEqualIndex] !== n2Ancestor[lastEqualIndex]
        ) {
            lastEqualIndex = -1
            break
        }
        leastCommonAncestor = n1Ancestor[lastEqualIndex]
    }

    return leastCommonAncestor

}


const root = new TreeNode(1)
const left = root.addLeft(2)
const right = root.addRight(3)

left.addLeft(4)
left.addRight(5)


// left.addLeft(4)
// left.addRight(1)

// right.addRight(4)


console.log(leastCommonAncestor(root, 4, 5))

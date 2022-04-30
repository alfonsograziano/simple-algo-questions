const TreeNode = require("./TreeNode")


const verticalTraversal = t1 => {
    const horizontalDistance = new Map()


    //Iterate over the tree

    //Add the left node to nodeHorizontalDistance--
    //Add the right node to nodeHorizontalDistance++

    const populateHorizontalDistance = (node, distance) => {
        if (node == null) return

        if (typeof horizontalDistance.get(distance) === "undefined")
            horizontalDistance.set(distance, [])

        // console.log(`Adding ${node.getValue()} to distance ${distance}`)
        horizontalDistance.get(distance).push(node.getValue())
 
        populateHorizontalDistance(node.getLeft(), distance -1)
        populateHorizontalDistance(node.getRight(), distance +1)
    }

    populateHorizontalDistance(t1, 0)

    const arrays = []

    //Get map min key
    const minKey = Math.min(... horizontalDistance.keys())
    const maxKey = Math.max(... horizontalDistance.keys())

    //TODO: sort each array 
    for(let i = minKey; i <= maxKey; i++){
        arrays.push(horizontalDistance.get(i))
    }  
    

    
    return arrays

}


const root = new TreeNode(1)
const left = root.addLeft(2)
const right = root.addRight(3)

left.addLeft(4)
left.addRight(1)

right.addRight(4)


console.log(verticalTraversal(root))

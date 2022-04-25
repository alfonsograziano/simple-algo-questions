//Input => A list and a number
//Output => list partitioned in this way => [all numbers < x, all numbers >= x]

//Goal => Time complexity O(n) | Space complexity O(1)

const ListNode = require("./ListNode")

let node = new ListNode(1)
node.addNext(4).addNext(3).addNext(2).addNext(5).addNext(2)

const partitionList = x => {

    let firstPointerLessThanX = null
    let lastPointerLessThanX = null

    let firstPointerMoreThanX = null
    let lastPointerMoreThanX = null

    let currentPointer = node
    let canIterate = true

    while (canIterate) {
        if (typeof currentPointer === "undefined") {
            canIterate = false
            break
        }
        const val = currentPointer.getValue()
        if (val < x) {
            if (lastPointerLessThanX !== null) lastPointerLessThanX.setNext(currentPointer)
            else firstPointerLessThanX = currentPointer

            lastPointerLessThanX = currentPointer
        } else {
            if (lastPointerMoreThanX !== null) lastPointerMoreThanX.setNext(currentPointer)
            else firstPointerMoreThanX = currentPointer

            lastPointerMoreThanX = currentPointer
        }

        currentPointer = currentPointer.getNext()
    }

    lastPointerMoreThanX.setNext()
    lastPointerLessThanX.setNext(firstPointerMoreThanX)

    node = firstPointerLessThanX
}

partitionList(3)


console.log(JSON.stringify(node, undefined, 4))
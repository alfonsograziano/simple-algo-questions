//Input => List 
//Output => Boolean, does the list contains a cycle?

//Approach 1 => Use a Map, iterate and add in the mapù
//Space O(n)
//Time O(n)

//Approach 2 => Use a slow and fast pointer

const ListNode = require("./ListNode")

const detectCycle = list => {
    let slowPointer = list
    let fastPointer = list

    let canWalk = true
    while (canWalk) {

        if (slowPointer === fastPointer && slowPointer !== list) {
            console.log("Found cycle on item => ", slowPointer.getValue())
            return true
        }
        if (typeof fastPointer === "undefined") return false

        slowPointer = slowPointer.getNext()
        fastPointer = fastPointer.getNext()
        if (typeof fastPointer === "undefined") return false
        fastPointer = fastPointer.getNext()
    }

}


const firstNode = new ListNode(1)
firstNode.addNext(2).addNext(3).addNext(4).addNext(5)

const thirdNode = firstNode.getNext().getNext()
const lastNode = thirdNode.getNext().getNext()

lastNode.setNext(thirdNode)

console.log(detectCycle(firstNode))

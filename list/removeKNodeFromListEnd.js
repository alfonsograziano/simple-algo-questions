//We could find the length of the list
//Then (length-k+1) is the node
//Iterate to find the node
//Remove the node from the list

//This solution iterate (at most) two times the list
//We want to iterate at most one time
//Using an ArrayList (like in Java), get the size of the list is O(1)
// https://stackoverflow.com/questions/863469/what-is-the-time-complexity-of-a-size-call-on-a-linkedlist-in-java

//Using a "normal" linked list without other variables you have to calculate it
//So to solve this problem we will use two pointers 
const ListNode = require("./ListNode")


//firstNode have to be global in order to remove the first node if nodeIndex is the length of the list
const removeNodeFromEndList = (nodeIndex) => {
    const end = nodeIndex - 1

    let startingNode = firstNode
    let pointer = firstNode
    let old = null

    for (let i = 0; i < end; i++) {
        startingNode = startingNode.getNext()
    }


    while (startingNode.hasNext()) {
        startingNode = startingNode.getNext()
        old = pointer
        pointer = pointer.getNext()
    }


    if(old !== null){
        old.setNext(pointer.getNext())
    } else{
        console.log("Removing first element")
        firstNode = firstNode.getNext()
        console.log(firstNode)
    }

}



let firstNode = new ListNode(1)
firstNode.addNext(2).addNext(3).addNext(4).addNext(5)

removeNodeFromEndList(1)
console.log(JSON.stringify(firstNode, undefined, 4))

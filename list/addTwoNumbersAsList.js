//Input => 2,4,3 (342) + 5,6,4 (465) = (807) => 7,0,8

//iterate over the two lists and create the numbers 
//Sum the numbers and find the solution

//Convert the solution into a list

const ListNode = require("./ListNode")


const addTwoNumbers = (l1, l2) => {

    let l1Pointer = l1
    let l2Pointer = l2

    let multiplier = 1
    let result = 0

    let couldIterate = true

    while (couldIterate) {

        const l1Value = typeof l1Pointer !== "undefined" ? l1Pointer.getValue() : 0
        const l2Value = typeof l2Pointer !== "undefined" ? l2Pointer.getValue() : 0

        const value = (l1Value + l2Value) * multiplier
        result += value

        multiplier *= 10

        couldIterate = typeof l1Pointer !== "undefined" ? l1Pointer.hasNext() : false ||
            typeof l2Pointer !== "undefined" ? l2Pointer.hasNext() : false
        
        if(!couldIterate) break

        l1Pointer = l1Pointer.getNext()
        l2Pointer = l2Pointer.getNext()
    }


    const strResult = result.toString()
    const resultList = new ListNode(strResult[strResult.length-1])
    let tempPointer = resultList
    
    for(let i = strResult.length-2; i >= 0; i--){
        tempPointer = tempPointer.addNext(strResult[i])
    }
   
    return resultList
}



let l1 = new ListNode(2)
l1.addNext(4).addNext(3)
let l2 = new ListNode(5)
l2.addNext(6).addNext(4)

const result = addTwoNumbers(l1, l2)
console.log(JSON.stringify(result, undefined, 4))
//Approach 1 => Bruteforce
//Approach 2 => Using Map (but with O(n) space complexity)

//Third approach (correct one) use the length of the lists
//In the linked list implementation you could have a variable with the length

const linkedListIntersection = (l1, l2) => {
    //I will "implement" the linked list as an array 
    //In order to keep the list implementation simple

    const l1Size = l1.length
    const l2Size = l2.length

    const diff = Math.abs(l2Size - l1Size) 
    const major = l2Size - l1Size > 0 ? "l2" : "l1"

    const l1Pointer = major === "l1" ? diff : 0
    const l2Pointer = major === "l2" ? diff : 0

    console.log("Diff found: ", diff, "l1: ", l1Pointer, "l2: ", l2Pointer)

    for (let i = 0; i < Math.max(l1Size, l2Size); i++) {
        const l1Item = l1[l1Pointer + i]
        const l2Item = l2[l2Pointer + i]
        if (l1Item === l2Item) return l1Item
    }

    return null

}

console.log(linkedListIntersection([1,2,3,4],[0,1,2,3,4]))
//Given an array of non-negative integers, you are positioned at the first index of the array
//Each element represents your maximum jump length at that position 
//Your goal is to reach the last index in the minimum number of jumps 

//My solution => generate a tree of all possible paths (bruteforce?)
//Take into consideration just the paths which arrives to the end of the array
//Put the length of each path in one array
//Return the minimum from the array 

//Correct solution => Choose biggest ladder
//I have to generate this "row" for each item

// steps = []

// 1 => [{0 => 1}] | Currentladder = 0 | steps.push[0]
// 2 => [{1 => 4}] | currentladder = 1 | steps.push[1]
// 3 => [{1 => 3, 2 => 3}]  
// 4 => [{1 => 2, 2 => 2, 3 => 7}]  
// 5 => [{1 => 1, 2 => 1, 3 => 6, 4 => 1}]  
// 5 => [{1 => 0, 2 => 0, 3 => 5, 4 => 0}]  | currentLadder = 3 | steps.push[3]

const jumpGame = arr => {
    if (arr.length === 0) return 0
    if (arr[0] === 0) return -1

    let ladder = arr[0] //biggest ladder | max reachable index
    let stair = arr[0] //current ladder
    let jump = 1

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) return jump

        if (i + arr[i] > ladder) {
            ladder = i + arr[i]
        }

        stair-- //traversing the current ladder
        if (stair === 0) {
            jump++
            stair = ladder - i
            if (stair <= 0) return -1
        }
    }

    return jump

}

console.log(jumpGame([2, 2, 4]))

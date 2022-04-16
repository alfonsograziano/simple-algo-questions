//This is not the best option
//Using the Moore voting algorithm you can have S(1) instead S(n) like in this case
const majorityElement = arr => {
    let majorityElement = null

    const map = new Map()

    for(let i = 0; i < arr.length; i++){
        if(typeof map.get(arr[i]) === "undefined") map.set(arr[i],0)

        map.set(arr[i], map.get(arr[i])+1)
        if(map.get(arr[i]) > arr.length/2) majorityElement = arr[i]

    }

    return majorityElement
}

console.log(majorityElement([2,2,1,1,1,2,2,]))
console.log(majorityElement([1,2,3,4,5,6,7,7]))
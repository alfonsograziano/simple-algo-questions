const singleElement = (arr, n) => {
    const values = new Map()
    let val = null

    for (let i = 0; i < arr.length; i++) {
        if (typeof values.get(arr[i]) === "undefined") values.set(arr[i], 0)
        values.set(arr[i], values.get(arr[i])+1)
    }

    values.forEach((value, key) => {
        if(value === 1) val = key
    })
    console.log(values)
    return val 
}

console.log(singleElement([0,0,1,1,2,3,3,4,4]))
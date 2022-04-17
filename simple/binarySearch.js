const binarySearch = (arr, v) => {
    let start = 0
    let end = arr.length-1
    
    while(start <= end){
        const middle = parseInt(((end-start)/2)+start)

        if(arr[middle] === v) return middle

        if(arr[middle] > v){
            end = middle-1
        }
        if(arr[middle] < v){
            start = middle+1
        }

    }

}

console.log(binarySearch([1,2,3,4],5))




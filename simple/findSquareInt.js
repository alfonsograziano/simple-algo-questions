//Our goal is to find just the integer part of the root
const findSquareInt = v => {

    let start = 0
    let end = v 

    while(start <= end){
        const middle = parseInt(((end-start)/2)+start)

        console.log(end, start, middle)

        if(Math.pow(middle,2) > v) end = middle -1
        if(Math.pow(middle,2) < v) start = middle +1

        if(start === end) return start
    }

}


console.log(findSquareInt(10000000000000000))
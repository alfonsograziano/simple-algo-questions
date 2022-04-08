/*
Input n
Output [1...n] 
if x is multiple of 3 print fizz
if multiple of 5 print buzz
if multiple of 3 & 5 print fizzbuzz
*/


const fizzBuzz = n => {

    const values = {
        FIZZ: "fizz",
        BUZZ:"buzz",
        FIZZBUZZ: "fizzbuzz"
    }

    for(let i = 0; i < n; i++){
        const val = i+1
        let toPrint = val.toString()

        if(val%3 === 0) toPrint = values.FIZZ
        if(val%5 === 0) toPrint = values.BUZZ
        if(val%3 === 0 && val%5 === 0) toPrint = values.FIZZBUZZ

        console.log(toPrint)
    }
}

fizzBuzz(100)
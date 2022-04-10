const { hashSorting } = require('../algo');
const { generateLargeArray } = require('../utils');
const { mergeSort } = require('../mergesort');
const fs = require("fs")


const benchmark = (arraySize, maxElement) => {

  console.log(`Array size: ${arraySize}, array max element: ${maxElement}`)
  const arr = generateLargeArray(arraySize, maxElement)
  console.log(`Array real size: ${arr.length}`)


  const startMerge = new Date()
  mergeSort([...arr])
  const endMerge = new Date()
  const mergeTime = endMerge.getTime() - startMerge.getTime()
  console.log("Mergesort ms: ", mergeTime)

  const startHash = new Date()
  hashSorting([...arr])
  const endHash = new Date()
  const hashTime = endHash.getTime() - startHash.getTime()
  console.log("hashSort ms: ", hashTime)

  return {
    mergeTime,
    hashTime
  }

}


const saveBenchmarkResults = (arraySize, maxElement, mergeTime, hashTime) => fs.appendFileSync("testOutput10000.csv", `${arraySize},${maxElement},${mergeTime},${hashTime}\n`)


saveBenchmarkResults("array size", "max element", "merge time", "hash time")

for (let i = 10000; i < 250000; i = i + 5000) {
  const arraySize = i
  const maxElement = i * 10000

  const { mergeTime, hashTime } = benchmark(arraySize, maxElement)
  saveBenchmarkResults(arraySize, maxElement, mergeTime, hashTime)

}



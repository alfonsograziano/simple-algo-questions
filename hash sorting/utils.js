const generateLargeArray = (n, max) => {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * max))
    }
    return [... new Set(arr)]
}

module.exports = {
    generateLargeArray
}
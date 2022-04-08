const geometric = k => {
    if(k === 0) return 1

    return 1/Math.pow(2,k) + geometric(k-1)
}


Array.prototype.bubbleSort = ()=>{
    const arr = this
    if (!(typeof arr === 'object' && arr instanceof Array)) {
        return "不是数组"
    }
    let temp
    let arrLen = arr.length
    for (let i = 0; i < arrLen; i++) {
        for (let j = 0; j < arrLen - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
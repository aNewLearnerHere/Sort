/* 
冒泡排序

基本思路：

1 从首位到末位进行本次排序；
2 比较相邻两个元素，第一个元素值大于第二个元素的值，则交换；
3 末位--；重复步骤1，2，3至末位=1；

时空复杂度以及稳定性分析：

时间复杂度： O(n^2) => (n-1)+(n-2)+...+1
空间复杂度： O(1)
稳定性：稳定 => 同值元素不变更位置
*/
function bubbleSort (arr) {
    if (!judge(arr)){
        return false;
    }
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
/**
 * 
 * 判断是否为非空数组
 */
function judge(arr) {
    if (arr && Array.isArray(arr)) {
        if (arr.length > 0) {
            return true
        }
    } else {
        return false
    }
}

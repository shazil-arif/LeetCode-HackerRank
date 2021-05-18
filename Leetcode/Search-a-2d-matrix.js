/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // compute middle of a row
    // if target < value at middle then go left
    for(let i = 0; i < matrix.length; i++){
        let arr = matrix[i];
        if(!binarySearch(arr, target)){
            if(i + 1 < matrix.length && target < matrix[i + 1][0]) return false;
        }
        else return true;
    }
    return false;
    
};

function binarySearch(arr, target){
    let lo = 0;
    let hi = arr.length - 1;
    while(lo <= hi){
        let mid = Math.floor((lo + hi)/2);
        if(arr[mid] === target) return true;
        else if (target < arr[mid]) hi = mid - 1;
        else lo = mid + 1;
    }
    return false;
}

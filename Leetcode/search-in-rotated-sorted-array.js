/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {  
    let pivotIndex = findPivotIndex(nums);
    let firstHalf = binarySearchOnSubArray(0, pivotIndex - 1, nums, target);
    if(firstHalf !== -1) return firstHalf;
    
    return binarySearchOnSubArray(pivotIndex, nums.length - 1, nums, target);
};

function findPivotIndex(nums){
    
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo <= hi){
        let mid = Math.floor((lo + hi)/2);
        
        if (nums[mid - 1] > nums[mid]) return mid;
        if (nums[mid + 1] < nums[mid]) return mid + 1;
        else if (nums[lo] < nums[mid]) lo = mid + 1;
        else hi = mid - 1;
    }
    
    return 0;
}

function binarySearchOnSubArray(lo, hi, nums, target){
    
    if (lo <= hi){
        let mid = Math.floor((lo + hi)/2);
        if(nums[mid] === target) return mid;
        else if(target > nums[mid]) return binarySearchOnSubArray(mid + 1, hi, nums, target);
        else if (target < nums[mid]) return binarySearchOnSubArray(lo, mid - 1, nums, target);
    }
    return -1;
    
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {  
    //if(nums.length <= 1) return nums;
    function binarySearch(lo, hi){
        if(lo <= hi){
            let mid = Math.floor((lo + hi)/2);
            if(nums[mid + 1] < nums[mid]) return nums[mid + 1];
            else if(nums[mid - 1] > nums[mid]) return nums[mid];
            else if(nums[lo] < nums[mid]) return binarySearch(mid + 1, hi);
            else return binarySearch(lo, mid - 1);
        }
        return nums[0];
    }
    return binarySearch(0, nums.length - 1);
};

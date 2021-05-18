/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let out = [];
    binSearch(0, nums.length - 1, nums, out);
    return out[0];
    
};
    
function binSearch(lo, hi, nums, out){
    if(lo <= hi){
        let mid = Math.floor((lo + hi)/2);
        if(nums[mid + 1] !== nums[mid] && nums[mid - 1] !== nums[mid] ){
            out.push(nums[mid]);
            return;
        }
        else{
            binSearch(lo, mid - 1, nums, out);
            binSearch(mid + 1, hi, nums, out);
        }
    }
}

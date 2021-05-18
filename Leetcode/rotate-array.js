/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    /**
    
    Use pos[i] describing new position
    nums = [1,2,3,4,5,6,7]
    pos =  [3,4,5,6,0,1,2]
    
     [4,2,3,1,5,6,7]
     
     
     [4,5,3,1,2,6,7]
     
     [4,5,6,1,2,3,7]
     
     
     [4,5,6,1,2,3,7]


    */
   if(k > nums.length ) k = k % nums.length;
   function reverseSubArray(start, end){
       while(start < end){
           let save = nums[start];
           nums[start] = nums[end]
           nums[end] = save;
           start++;
           end--;
       }
   }
   reverseSubArray(0, nums.length - 1);
   reverseSubArray(0, k - 1);
   reverseSubArray(k, nums.length - 1)
  
    
};

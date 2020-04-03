/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let Map = {}
    for(let i = 0; i < nums.length; i++){
        let to_find = target - nums[i]; 
        if(Map[to_find]!==undefined) {
            return [i,Map[to_find]]    
        }
        else Map[nums[i]] = i 
    }
    
    
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[i]+nums[j]===target){
    //             return [i,j];
    //         }               
    //     }
    // }
    
    /*
    brute force O(n^2)
    2 + 2 -> 2 + 7 -> 2 + 11 -> 2 + 15 = inner loop runs 4 times
    repeat for every item. therer are 4 items.
    4 * 4 = 16
    in general, inner loop runs n times for n items => n^2
    
    
    method 2: start second loop at i+1 because addition is commutative
    then: (n-1) + (n-2) + (n-3) + ... + 1
    in example: 3 + 2 + 1 = 6
    2+7 , 2 + 11, 2 + 15
    7 + 11, 7 + 15
    11 + 15
    
    length of summation is n-1
    n + n + n - 1 - 2 - 3 + ... + 1
    ...........................
    n-1 items
    
    in worst case still O(n^2)
    but for small inputs, huge improvement
    
    (4-1)+(4-2)+1
    3+2+1 = 6
    suppose n = 10,000
    10,000 - 1 + 10,000- 2 ...+ 1
    99990000 - 1 - 2 - 3 - (9001)
    99990000 - 40513501
    went from 16 to 6
    
    METHOD 3:
    use hashtable
    
    */
};
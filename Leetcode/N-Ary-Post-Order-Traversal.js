/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return [];
    let nums = [];
    
    function helper(current){
        if(current){
            for(const child of current.children) helper(child);
            nums.push(current.val);
        }
    }
    
    helper(root);
    return nums;
};

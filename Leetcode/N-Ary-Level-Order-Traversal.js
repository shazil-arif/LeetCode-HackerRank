/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    return levelOrderTraversal(root);
};

function levelOrderTraversal(root){
    let q = [];
    let nums = [];
    q.push(root);
    while(q.length > 0){
        
        let levelSize = q.length;
        let level = [];
        for(let i = 0; i < levelSize; i++){
            
            let front = q.shift(); 
            
            for(const child of front.children){
                if(child) q.push(child);
            }
            level.push(front.val);
        }
        
        nums.push(level);
    }
    return nums;
}

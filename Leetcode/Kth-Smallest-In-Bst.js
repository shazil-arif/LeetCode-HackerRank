/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Pair{
    int answer;
    int count;
    int target;
    public Pair(int answer, int count, int target){
        this.answer = answer;
        this.count = count;
        this.target = target;
    }
}
class Solution {


    public int kthSmallest(TreeNode root, int k) {
        
        Pair p = new Pair(0, 0, k);
        inOrder(root, p);
        return p.answer;
        
    }
    
    
    public void inOrder(TreeNode root, Pair pair){
        if(root.left != null) inOrder(root.left, pair);
        pair.count++;
        if(pair.count == pair.target) {
            pair.answer = root.val;
            return;
        }
        if(root.right != null) inOrder(root.right, pair);
           
    }
}

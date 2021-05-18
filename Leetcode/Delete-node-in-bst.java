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
class Solution {
    public TreeNode deleteNode(TreeNode root, int key){
        /**
         * 3 scenarios:
         *
         * 1) Node being deleted has no children. Can simply search for it and set it to null
         * 2) Node being deleted has 1 child. In that case we can set the parent link of the node being deleted to the CHILD of the
         * node being deleted
         * 3) node being deleted has 2 children. In this case we do 2 things;
         *  i) Replace the node being deleted with the minimum value in its right subtree
         *  ii) Replace the node being deleted with the maximum value in its left subtree
         *  Both of these approaches maintain the BST property
         */

        if (root == null) return root;

        if(key < root.val) root.left =  deleteNode(root.left, key);
        else if(key > root.val) root.right = deleteNode(root.right, key);
        else{
            if(root.left == null && root.right == null){
                root = null;
            }

            else if(root.left == null){
                root = root.right;
            }
            else if (root.right == null){
                root = root.left;
            }
            else{
                if(root.right == null) return root.left;
//              if(root.left == null) return root.right;
                //TreeNode min = findMin(root.right);
                TreeNode max = findMax(root.left);
                //root.val = min.val;
                root.val = max.val;
                // to remove the duplicate
                //root.right = deleteNode(root.right, min.val);
                root.left = deleteNode(root.left, max.val);
            }
//
        }
        return root;
    }
    private TreeNode findMin(TreeNode root){
        TreeNode node = root;
        while(node.left != null){
            node = node.left;
        }
        return node;
    }
    private TreeNode findMax(TreeNode root){
        TreeNode node = root;
        while(node.right != null){
            node = node.right;
        }
        return node;
    }   
}

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
import sys
class Solution(object):
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return self.validBST(root,-sys.maxint-1,sys.maxint)
    def validBST(self, currentNode, _min, _max):
        #currentNode can be thought of as the root node at 
        #each recursive call
        if (currentNode == None):
            return True
        if (currentNode.val < _min or currentNode.val > _max):
            return False
        return self.validBST(currentNode.left, _min, currentNode.val - 1) and self.validBST(currentNode.right, currentNode.val + 1, _max)
        
        
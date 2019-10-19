# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        self.lst = []
        self.pre(root)
        return self.lst
    def pre(self,root):
        if root:
            self.lst.append(root.val)
            self.pre(root.left)
            self.pre(root.right)
        else:
            return
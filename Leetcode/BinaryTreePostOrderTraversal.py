# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        self.lst = []
        self.post(root)
        return self.lst
    def post(self,root):
        if root:
            self.post(root.left)
            self.post(root.right)
            self.lst.append(root.val)
        else:
            return  
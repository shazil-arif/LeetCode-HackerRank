# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def kthSmallest(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: int
        """
        self.lst = []
        q = []
        
        if not root: return
        
        q.append(root)
        while q:
            #the size of the queue is the size of the level
            #use this fact to get all elements on one level
            
            levelsize = len(q)
            
            while(levelsize>0):
                root = q.pop(0)
                self.lst.append(root.val)
                if(root.left):
                    q.append(root.left)
                if(root.right):
                    q.append(root.right)
                levelsize -= 1
                
            self.lst.sort()
            
        return self.lst[k-1]
        
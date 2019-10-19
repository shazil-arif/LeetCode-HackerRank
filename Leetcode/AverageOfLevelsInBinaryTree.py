# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        self.lst = []
        self.q = []
        self.total = 0
        
        if not root: return
        
        self.q.append(root)
        while self.q:
            #the size of the queue is the size of the level
            #use this fact to get all elements on one level
            
            levelsize = len(self.q)
            levelsize_nochange = levelsize
            
            while(levelsize>0):
                root = self.q.pop(0)
                self.total += root.val
                if(root.left):
                    self.q.append(root.left)
                if(root.right):
                    self.q.append(root.right)
                levelsize -= 1
                
            x = float(self.total/(levelsize_nochange*1.0))
            self.lst.append(x)
            self.total = 0

            
        return self.lst
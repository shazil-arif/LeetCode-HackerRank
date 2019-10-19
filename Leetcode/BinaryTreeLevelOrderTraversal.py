# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        self.lst = []
        self.toadd=[]
        self.q = []
        
        if not root: return
        
        self.q.append(root)
        while self.q:
            #the size of the queue is the size of the level
            #use this fact to get all elements on one level
            levelsize = len(self.q)
            while(levelsize>0):
                root = self.q.pop(0)
                self.toadd.append(root.val)
                if(root.left):
                    self.q.append(root.left)
                if(root.right):
                    self.q.append(root.right)
                levelsize -= 1
            self.lst.append(self.toadd)
            self.toadd = []
            
        return self.lst
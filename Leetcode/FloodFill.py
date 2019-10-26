class Solution(object):
    def floodFill(self, image, sr, sc, newColor):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type newColor: int
        :rtype: List[List[int]]
        """
        
        self.numRows = len(image)
        self.numCol = len(image[0])
        self.newColor = newColor
        self.target = image[sr][sc]
        isVisited = []
        for i in range(self.numRows):
            isVisited.append([])
        for i in range(self.numRows):
            for j in range(self.numCol):
                isVisited[i].append(0)
        
        self.DFS(image,sr,sc,isVisited)
        return image
       
    def DFS(self,image,row,col,isVisited):
        if (row < 0 or row >= self.numRows or col < 0 or col >= self.numCol): return
        if isVisited[row][col] == -1 : return
        if image[row][col] == self.target:
            image[row][col] = self.newColor
            isVisited[row][col] = -1
            self.DFS(image,row - 1, col,isVisited)
            self.DFS(image,row + 1, col,isVisited)
            self.DFS(image,row, col + 1,isVisited)
            self.DFS(image,row, col - 1,isVisited)
        return
        

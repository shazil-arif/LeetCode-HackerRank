class Solution(object):
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        numRows = len(grid)
        numCols = len(grid[0])
        perim=0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                row = [-1, 1, 0, 0]
                col = [0 ,0, 1 , -1]
                if (grid[i][j]==1):    
                    for x in range(4):
                        if (i + row[x]  >= 0 and i + row[x] < numRows and j + col[x] >= 0 and j + col[x] < numCols):
                            if grid[i+row[x]][j+col[x]] != 1:
                                #if doesn't have a neighbor thats 1, count that side
                                perim+=1
                        else:
                            perim+=1

        return perim
                            

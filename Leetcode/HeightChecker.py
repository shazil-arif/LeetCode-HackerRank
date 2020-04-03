class Solution(object):
    def heightChecker(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        copy = []
        for i in range(len(heights)):
            copy.append(heights[i])
        heights.sort()
        count=0
        for i in range(len(copy)):
            if copy[i] != heights[i]:
                count+=1
        return count

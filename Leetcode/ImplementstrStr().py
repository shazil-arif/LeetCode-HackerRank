class Solution:
    def strStr(self, haystack: 'str', needle: 'str') -> 'int':
        if (len(needle)==0):
            return 0
        for i in range(len(haystack)):
            if (i+len(needle) <= len(haystack) and haystack[i:i+len(needle)]==needle):
                return i
        return -1
        
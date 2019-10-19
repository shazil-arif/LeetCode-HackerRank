class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        if digits[-1] != 9:
            digits[-1] = digits[-1]+1
            return digits
        else:
            i = len(digits)-1
            while(i>=0):
                if digits[i]==9:
                    digits[i]=0
                else:
                    digits[i]=digits[i]+1
                    break
                i -= 1
                
            #in the case all digits were 9
            if digits[0] == 0:
                digits[0] = 1
                digits.append(0)
            return digits  
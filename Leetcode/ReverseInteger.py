class Solution:
    '''
    this is a terrible solution!
    '''
    def reverse(self, x: 'int') -> 'int':
        mystr = str(x)
        i=len(mystr)-1
        if(x%10==0 and x!= 0):
            i = len(mystr)-2
        build =""
        while(i>=0):
            if (i==0 and mystr[i]=="-"):
                break
            build+=mystr[i]
            i-=1
        if (int(build)<2**31-1):
            if (x<0):
                return int(build)*-1
            return int(build)
        return 0
        
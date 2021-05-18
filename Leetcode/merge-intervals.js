/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let merged = [];
    
    let ptr = 0;
    
    intervals.sort((a, b) => {
        return a[0] - b[0]; 
    })
    
    merged.push(intervals[0]);
    for(let i = 0; i < intervals.length - 1; i++){
        let one = merged[ptr]
        let two = intervals[i + 1];
        
        let secondIntervalStart = two[0];
        let firstIntervalEnd = one[1];
        
        
        if(secondIntervalStart <= firstIntervalEnd){
            let firstIntervalStart = one[0];
            let secondIntervalEnd = two[1];
            if(secondIntervalEnd < firstIntervalEnd) secondIntervalEnd = firstIntervalEnd;
            let temp = [firstIntervalStart, secondIntervalEnd];
            merged[ptr] = temp;
        }
        else{
            merged.push(two);
            ptr++;
        }
    }
    
    return merged;
};

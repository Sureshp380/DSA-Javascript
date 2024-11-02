/**Question 1: Sorted Squared Array - 
You are given an array of Integers in which each subsequent value is not less than the previous value. 
Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.
**/

function sortedSquares(arr) {
    const result = new Array(arr.length);
    let left = 0;
    let right = arr.length - 1;
    let index = arr.length - 1;
    
    while (left <= right) {
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];
        
        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }
    
    return result;
}


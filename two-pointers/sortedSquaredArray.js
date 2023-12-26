/**

Sorted Squared Array (Dificulty: easy)

Two Pointers Approach
This problem could have a simple solution since the array is sorted and we just need the square of each number. One option would be to loop the array and perform newArr[i] = array[i] * array[i]. 
As the array is sorted, there shouldn't have any changes on the index organization so the square of a number should have the same index of the original number.

But, as we can deal with negative numbers, a better approach would be to use the Two Pointer algorithm. We can set a pointer in the beginning of the array and one at the end of it. 

On a while loop, on each iteraction we check if the pointer at the end is pointing to a number that is bigger than the number that the pointer at the beginning is pointing to. 
Of course, for this comparison we need to consider the absolute value of these numbers.

In this approach, we will therefore, populate our array from the last position to first one because we’ll check for the highest numbers on the extremities of the array. 

To populate the array this way using JS, we need to create an empty array and populate it, initially, with 0. 
Then, we need a pointer at the very end of our new array. This pointer will be decreased each time we add a new element. 

Example:
array = [-7, -5, -4, 3, 6 ]

1. We create an empty array []

2. We loop our original array and push 0 to the new one - like this we’ll have an array with the same length: 
    squaresArr = [0, 0, 0, 0, 0, 0, 0]
    (I know we could use Array.map(), but for this study I'm not considering built-in methods)

3. Then, we set the pointers. The one in the beginning will start at 0 and the one at the end will start at array.length - 1. 
    We also need to set a pointer to control the next "available position" in our squaresArray. This pointer should start at the end, so squaresArrEndPointer = squaresArr.length - 1
    In this example, the start pointer will point to -7 and the end pointer will point to 6


3. We need to check if these numbers are lower than 0. If they are, we need to multiply them by -1, so we’ll get the absolute value. 
    In this example, after checking this we’ll have the numbers 7 and 6

4. Then, we check if the number the start pointer is pointing to is bigger. 
    In this example, array[start] = 7 and it’s bigger than array[end] = 6

5. Thus, we attribute squaresArr[squaresArrEndPointer] = 7 * 7

6. Then, we move the start pointer forward and we decrease the squaresArrPointer, meaning updating the next available position because now we added a new element


Translating to code it will be something like this:
 */

function sortedSquaredArray(array) {
    const squaresArr = []
  
    for (let i = 0; i < array.length; i++) {
      squaresArr.push(0)
    }
  
    let startPointer = 0
    let endPointer = array.length - 1
    
    let squaresArrPointer = array.length - 1
    
    while(startPointer <= endPointer) {
      let startPointerValue = array[startPointer]
      let endPointerValue = array[endPointer]
  
      // We check if the value is negative, if it is, we multiply it by 1 negative
      // So we can get the absolute value of it
      if (startPointerValue < 0) startPointerValue = startPointerValue * (-1)
      if (endPointerValue < 0) endPointerValue = endPointerValue * (-1)
  
      if (startPointerValue >= endPointerValue) {
        
        squaresArr[squaresArrPointer] = startPointerValue * startPointerValue
        startPointer++
      } 
      
      else if (startPointerValue < endPointerValue) {
        squaresArr[squaresArrPointer] = endPointerValue * endPointerValue
        endPointer--
      }
  
      squaresArrPointer--;
    }
    
    return squaresArr;
}
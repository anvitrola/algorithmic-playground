/* Palindrome Check (Difficulty: easy)

Write a function that takes in a non-empty string and that returns a boolean representing
whether the string is a palindrome.

A palindrome is drfined as a strinf that's written the same forward and backward

Sample input
string = "abcdcba"

Sample output
true

1. Break the string in a array of chars
1. Initialize 2 pointers, one in the beginning of the word and one at the end
The end here will be represented by the last element, which is in the position
arr.length - 1


*/
function isPalindrome(string) {
    const stringArr = string.split("")
    
    let leftPointer = 0
    let rightPointer = stringArr.length - 1
  
    while(leftPointer <= rightPointer) {
      if(stringArr[leftPointer] !== stringArr[rightPointer]) 
        return false
      leftPointer++
      rightPointer--
      
    }
  
    return true
  }
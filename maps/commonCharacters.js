/*
Common Characters (dificulty: easy)

Write a function that takes in a non-empty list of non-empty strings and returns a list
of characters that are common to all strings in the list, ignoring multiplicity.

Note that the strings are not garanteed to only contain alphanumeric characters. 
The list you return can be in any order.

Sample Input:
strings = ["abc", "bcd", "cbaccd"]

Sample Output:
["b", "c"]

Solution: simple hashset usage

1. Iterate the array and split the strings into array of chars
2. Initiate an empty hash set 'commonChars'
3. Iterate the first string chars and add them to the commonChars. 

  This will be our parameter. We will compare the first string chars with 
  all other elements and the logic behind it is that we can cut off the chars 
  that don't appears in other strings. 

4. Each iteration we will check if the current string chars has the chars we have
saved wihin our set. If not, we remove that char from our set.
  For this interation, it is important to create another hashset with the 
  chars of the current string

Ex:

We add "a" "b" "c" to our set

Then, we iterate the array starting at position 1 (since we already iterated element 0). 

We get ["b", "c", "d"] and we turn that into another hashSet because search operations within sets is O(1)
After that, we need to iterate our original set and check if the new hashSet we just created has that key. 
If it doesn't, we remove that key from our original set because that means that the first string had that letter but the Nth one didn't so it is not a common letter.

In our example, ["b", "c", "d"] doesn't have 'a' so we cut it off, but it does have "c" and "b" so we 
keep them on the set "cbaccd" has "c" and "b" so we keep them on the hash set.

On the end of iteration we create an array from our charsSet.

Time Complexity: O(N * M) in which 
N = number of strings within the array 
M = string length
*/

function commonCharacters(strings) {
    const charsArr = []
  
    const commonCharsSet = new Set()
  
    for(let i = 0; i < strings.length; i++){
      const chars = strings[i].split('')
      
      charsArr.push(chars)
    }
  
  
    for(let i = 0; i < charsArr[0].length; i++) {
      commonCharsSet.add(charsArr[0][i])
    }
  
    for(let i = 1; i < charsArr.length; i++) {
      const currentCharsArr = charsArr[i]
      const currentCharsSet = new Set()
      
      for(let j = 0; j < currentCharsArr.length; j++) {
        currentCharsSet.add(currentCharsArr[j])
      }
  
      for(let key of commonCharsSet) {
          if(!currentCharsSet.has(key)) commonCharsSet.delete(key)
        }
    }
    
    return Array.from(commonCharsSet)
  }
  
/*
Semordnilap (Dificulty: easy)
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

A semordnilap pair is defined as a set of different strings where the reverse of one word is the same 
as the forward version of the other. For example, "diaper" and "repaid"

Sample input:
words = ["diaper", "abc", "test", "cba", "repaid"]

Sample output:
[["diaper", "repaid"], ["abc", "cba"]]

1. Iterate the array and put all strings in a set so we can have O(1) when searching a string 

2. For each string in the array, we'll split the string so we can have access to every char

3. Then, to reverse the string, we need to create an empty array and start 
populating the array from the last char to the first one

4. Once we have the reverse string, we check if it's inside our set.
We also check if the reversed string is not equal to the original string 
(ex: aaa reversed is aaa and shouldn't be counted)

5. Finally, if the reversed string exists in the set, we add this pair 
to our pairs array and we delete both strings from the set table

Complexity: O(n*m) in which n is the length of the words array and n is the length of each string
Space complexity: O(n*m)

*/

function semordnilap(words) {
    const wordsSet = new Set()
    const pairsArr = []
  
    // copying all strings to a table
    for (let i =0; i < words.length; i++) {
      if(!wordsSet.has(words[i])) wordsSet.add(words[i])
    }
  
    for(let i= 0; i < words.length; i++) {
  
      const charArr = words[i].split("")
  
      // Pointer to the last char in the charArr because we'll populate inverseStringArr from the last char to the first one
      let currentChar = charArr.length - 1
      let currentPosition = 0
      
      const inverseStringArr = []
  
      while (currentChar >= 0) {
        inverseStringArr[currentPosition] = charArr[currentChar]
        currentChar--
        currentPosition++
      }
  
      const inverseStr = inverseStringArr.join("")
  
      if (wordsSet.has(inverseStr) && (inverseStr !== words[i])) {
        pairsArr.push([words[i], inverseStr])
        wordsSet.delete(words[i])
        wordsSet.delete(inverseStr)
      }
    }
    
    return pairsArr;
  }
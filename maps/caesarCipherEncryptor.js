/**
 * Caesar Cipher Encryptor (Dificulty: easy)
 * 
 * Given a non-empty string of lowercase letters  and a n on-negative integer representing a key, write
 * a function that returns a new string obtained by shifting every letter in the input string
 * by k positions in the alphabet, where k is the key.
 * 
 * Note that letters should "wrap" around the alphabetic; in other words, the letter z shifted by one 
 * returns the letter a
 * 
 * 
 * Sample input:
 * string  = "xyc"
 * key =  2
 * 
 * Sample  output"
 * "zab"
 * 
 * 
 * 1. Create an array with the alphabet
 * 2. Create a map  in which we'll keep track of every letter and its position inside the alphabet
 * 3. Split the string 
 * 4. For each char within the string, we get its position in the alphabet by performing
 * map.get(),  which is O(1). After we get the position of that char in number, we sum it with the key value
 * 
 * 5. Once we have the new element position in hands, we just need to get the array[sum] letter i.e the letter that is storaged in that position of the alphabet
 * But in here we need to consider that sometimes the sum will be higher than the alphabet length
 * and in those cases we need to start from the beginning. 
 * 
 * For example, as the last letter (z) is in the 25th position, if the sum is 26th and we try to get array[26]
 * we'll see a out of bounderies error so we should restart the count from 0. 
 * 
 * So, once we have the sum, we check if it's higher or equal than 26 and while it is, we perform
 * sum = sum - 26 
 * which means every time we get to the last letter, we go back to the beginning of the alphabet (a)
 * 
 * Complexity: O(n)
 * 
 */

function caesarCipherEncryptor(string, key) {
    const stringArr = string.split("")
    const encryptedArr = []
    
    const alphabet = ['a', 'b',  'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 
                      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                      'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetMap = new Map()
  
    for(let i = 0; i < alphabet.length; i++) {
      alphabetMap.set(alphabet[i], i)
    }
  
    for(let i = 0; i < stringArr.length; i++) {
        const currentLetterPosition = alphabetMap.get(stringArr[i])
        
        let sum = currentLetterPosition + key
    
        while(sum >= 26) {
            sum = sum - 26
        }
    
        encryptedArr.push(alphabet[sum])
    }
  
    return encryptedArr.join("")
}
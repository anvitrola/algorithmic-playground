/**
 * 
 * First Non Repeating Char 
 * (Dificulty: easy)
 * 
 * Write a function that takes in a string os lowercase English alphabet letters and returns the index of the string's first non-repeating character.
 * 
 * The first non-repeating character is the first character in a string that accurs only once.
 * If the input string soesn't have any non-repeating characters, your function should return -1
 * 
 * Sample input
 * string = "abcdaf"
 * 
 * Sample output
 * 1 // the first non-repeating char is 'b' and it's found at index 1
 */

function firstNonRepeatingCharacter(string) {
  // First we split the string in order to get an array
  const stringArr = string.split("");

  // Then, we create a map in which we're going to keep track of each char, its position and the number of times this char appears in the string
  // Example: {'a': [charIndex, numbersOfTimeItAppearedOnTheString]}
  const charsMap = {};

  for (let i = 0; i < stringArr.length; i++) {
    const currentChar = stringArr[i];

    // We check if the current char already exists on the map.
    // If it doesn't, we add this char as a property and initiate an array as a value
    // The first position of the array is the char position and the second one we set as 1 since it's the first time this char is appearing on the sequence
    if (!charsMap.hasOwnProperty(currentChar)) {
      charsMap[currentChar] = [];

      charsMap[currentChar][0] = i;
      charsMap[currentChar][1] = 1;
    }
    // If this char already exists on the map, we increase the number of times it has appeared
    else {
      charsMap[currentChar][1]++;
    }
  }

  // We iterate our map and we filter it  removing all chars that appears more than once i.e we check if the second value of the array is bigger than one
  // If it is, we delete this property of our map
  for (element in charsMap) {
    if (charsMap[element][1] > 1) delete charsMap[element];
  }

  // We check if there's any element left after filtering our chars map
  if (!Object.keys(charsMap).length) {

    // We initiate a variable with a big number representing the max index we can have so we can check for the lowest value we can find
    let firstNonDuplicatedCharIndex = 99999999;

    // We iterate our map with all non duplicated chars to find the one with the lowest index
    for (element in charsMap) {
        // We get the element first position, which is the char index
      const currentElementIndex = charsMap[element][0];

      // We compare if the current element index is lower than the previous one. If it is, we update our firstNonDuplicatedCharIndex value
      if (currentElementIndex < firstNonDuplicatedCharIndex) {
        firstNonDuplicatedCharIndex = currentElementIndex;
      }
    }

    return firstNonDuplicatedCharIndex;
  }

  // If there isn't any element left in our chars array, it means that all elements are repeated
  return -1;
}

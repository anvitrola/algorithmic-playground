/**
 * 
 * Tournament Winner 
 * (Dificulty: easy)
 * 
 * Sample input
 * 
 * competitions = [
 *  ['HTML', 'C#'], 
 *  ['C#', 'Python'],
 *  ['Python', 'HTML']
 * ]
 * 
 * results = [0, 0, 1]
 * 
 * 
 * Sample output
 * "Python"
 */

function tournamentWinner(competitions, results) {
    // Create a Map to store the players X their points
    const playersPointsMap = {}
  
    for (let i = 0; i < competitions.length; i++) {
  
      // will give us the match like ["HTML", "C#"]
      const competition = competitions[i]
  
      const firstPlayer = competition[0]
      const secondPlayer = competition[1]
  
      // Verify if our map already includes these players and, if not, add them as keys and initialise their points to 0
      if (!playersPointsMap.hasOwnProperty(firstPlayer)) {
        playersPointsMap[firstPlayer] = 0
      } 
  
      if (!playersPointsMap.hasOwnProperty(secondPlayer)) {
        playersPointsMap[secondPlayer] = 0
      }
  
      // As the result to this match in the results array will have the same index, we can directly access it in the same loop
      // If the result is 0, it means that the second player, meaning the competition[1] won so we increment its points
      if (results[i] === 0) playersPointsMap[secondPlayer]++
      else playersPointsMap[firstPlayer]++
    }
  
    // Now we need to know which player has more points and for that we need these variables to keep track of it
    let maxPoints = 0
    let winner = ''
  
    // We loop our players X points map and keep updating the maxPoints variable and the winner string as long as 
    // we find some player with a higher score
    for (element in  playersPointsMap) {
      if(playersPointsMap[element] > maxPoints) {
        maxPoints = playersPointsMap[element]
        winner = element
      }
    }
     
    // Finally we return the winner string
    return winner;
  }
  
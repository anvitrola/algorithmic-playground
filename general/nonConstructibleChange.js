/*

Non-Constructible Change (Difficulty: Medium - for me)

Given an array of positive integers representing the values of coins in your
possesion, write a function that returns the minimum amount of change that
you CAN NOT create.
The given coins can have any positive integer value and aren't necessarily unique 

Sample Input
coins = [5,7,1,3,22]

Sample output = 

1. First, we need to sort the array 
2. Then, we start a change variable as 0
3. Loop through the array to sum up the values

4. If the next element in the array is bigger than the change we stop 
the iteration and we return currentChange + 1 because it means we can create
change from [1, currentChange] and we can create currentChange + (element that is
bigger than the currentChange), but we can't make currentChange + 1


It is true that we can create changes from [1, currentChange], considering it 
an interval, because we can use the currentChange and all the coins to make
several combinations

*/

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let currentChange = 0;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    if (coin > currentChange + 1) return currentChange + 1;
    currentChange += coin;
  }

  // Write your code here.
  return currentChange + 1;
}

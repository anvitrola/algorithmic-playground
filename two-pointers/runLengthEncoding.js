/**
 * Run-Length Endoding (Difficulty: Easy)

Write a function that takes in a non-empty string and returns its run-length
encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression 
in which runs of data are stored as a single data value and counter, rather
than as the original run". For this problem, a run of data is any sequence
of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts
of special chars, including numbers. And since encoded data must be decodable (lossless),
this means that we can't naivily run-length-encode long runs. 

For example, "AAAAAAAAAAAA" (12A) can't naively be encoded as "12A", since this string
can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10+ chars) should
be encoded in a split fashion; the aforementioned run should be encoded as "9A3A"

Sampe Input:
string = "AAAAAAAAAAAABBCCCCDD"

Sample output:
"9A4A2B4C2D"


Explanation:
1. First, we split the string in an array of chars
2. Then, we initiate a new array where we will keep track of our encoded subsequences

3. Initiate a counter to keep track of the length of the subsequence

4. Iterate the array of chars and as we do it, we need to look if the next char
i.e arr[i + 1] is equal to our current char arr[i]. If it isn't, it means that
that this current char should be already added to the coded chars array

    It is important to notice that every time we add a new subsequence to our
    coded chars array we will reinitialize our counter variable because now we will be
    analysing a new char

5. If the current char is equal to the next one, then we increase the counter
and we continue iteration.

6. At the end, we just join all chars to form a new string and return it
 * 
 * *
 * */
function runLengthEncoding(string) {
  const charsArr = string.split("");
  const codedCharsArr = [];

  let counter = 1;

  for (let i = 0; i < charsArr.length; i++) {
    if (charsArr[i] === charsArr[i + 1]) {
      if (counter >= 9) {
        codedCharsArr.push(`${counter}${charsArr[i]}`);

        counter = 1;
      } else {
        counter++;
      }
    } else {
      codedCharsArr.push(`${counter}${charsArr[i]}`);
      counter = 1;
    }
  }

  return codedCharsArr.join("");
}

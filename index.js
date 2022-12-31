//Task#1
// Given a string s, return true if s is palindrome.
// An sting is a palindrome when it reads the same backward as forward.
// Example#1, input: abcba  Output: true.
// Example#2, input: abcbc  Output: false.
// Example#3, input: abc  Output: false.

function IsPalindrome(s) {
};

//Task#2
// Given a function which takes an array of words as input, find the common letters among the words and their frequency. Return the letters with their frequency.

// Example 1:
// Input: words = ["browser","brother","brand"]
// Output: b:3,r:3,o:2,e:2,r:3

// Example 2:
// Input: words = ["cat","dog","zebra"]
// Output: a:2

// Example 3:
// Input: words = ["car","wish"]
// Output: ""

function FindCommon(arr) {
  let commonLetters = {}
  for (let words of arr) {//["cat","dog","zebra"] n=3
    for (let char of words) {//c
      // if (char.isAlpha()) {
        if (commonLetters[char]) {
          commonLetters[char]++;
        }
        else {
          commonLetters[char] = 1;
        }
      // }
    }
  }
  if (commonLetters[char].length > 1) {
    return commonLetters
  }
}
//commonletter[c]=1
//commonletter[a]=2
//commonletter[t]=1
//commonletter[d]=1
//commonletter[o]=1
//commonletter[g]=1
//commonletter[z]=1
//commonletter[e]=1
//commonletter[b]=1
//commonletter[r]=1

// Exercise 2-9
// ------------

// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (i = 0; i < words.length; i++) {
    if (words[i].length >= longest.length) {
      longest = `${words[i]}`;
    }
  }
  return longest;
}

expect(longestWord("matthew cote"), "matthew");
expect(longestWord("i love coding"), "coding");
expect(longestWord("hey hello morning"), "morning");
expect(longestWord("four word what"), "what");
expect(longestWord(""), "");

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

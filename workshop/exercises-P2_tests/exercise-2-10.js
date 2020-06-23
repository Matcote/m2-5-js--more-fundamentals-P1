// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string
function capitalize(str) {
  str = str.toLowerCase();
  let chars = str.split("");
  chars[0] = chars[0].toUpperCase();
  let newWord = chars.join("");
  return newWord;
}

function makeIntoTitle(sentence) {
  let words = sentence.split(" ");
  for (i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  let title = words.join(" ");
  return title;
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);
expect(makeIntoTitle("hello world"), "Hello World");
expect(
  makeIntoTitle("ALL YOUR BASE ARE BELONG TO US"),
  "All Your Base Are Belong To Us"
);
expect(makeIntoTitle("i LOVE typing WEIRD"), "I Love Typing Weird");
expect(
  makeIntoTitle("i dont know what to write anymore"),
  "I Dont Know What To Write Anymore"
);
expect(makeIntoTitle("blah blah 9"), "Blah Blah 9");

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

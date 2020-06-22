// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  if (str.length > index) {
    return str.charAt(index);
  }
  return undefined;
}

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");
expect(getLetterAtIndex("matthew", 5), "e");
expect(getLetterAtIndex("good morning", 9), "i");
expect(getLetterAtIndex("hello", 8), undefined);
expect(getLetterAtIndex("goodbye", 7), undefined);
expect(getLetterAtIndex("ross", 3), "s");
expect(getLetterAtIndex("goodbye", 0), "g");

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

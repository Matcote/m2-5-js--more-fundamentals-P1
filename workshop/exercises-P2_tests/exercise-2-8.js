// Exercise 2-8
// ------------

// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
//
// You are NOT ALLOWED to use the `reverse` method.
// You must use a loop of some kind (for, while, forEach, map, etc)
//
// HINT (one possible approach):
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the
//    empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function reverse(str) {
  if (typeof str === "string") {
    let chars = str.split("");
    let backwards = [];
    for (i = 0; i < chars.length; i++) {
      backwards.push(chars[chars.length - 1 - i]);
    }
    let reverse = backwards.join("");
    return reverse;
  } else {
    return undefined;
  }
}

expect(reverse("hello"), "olleh");
expect(reverse("matthew"), "wehttam");
expect(reverse("874"), "478");
expect(reverse(undefined), undefined);
expect(reverse(), undefined);

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

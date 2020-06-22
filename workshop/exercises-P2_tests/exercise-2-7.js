// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (arr[1] > 0 && typeof arr[0] === "string") {
    return `${arr[0].repeat(arr[1])}`;
  } else if (arr[1] < 1) {
    return "";
  } else {
    return undefined;
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["foo", 3]), "foofoofoo");
expect(repeat(["fo", 3]), "fofofo");
expect(repeat(["foo", -1]), "");
expect(repeat(["foo", 0]), "");
expect(repeat(["hi", 10]), "hihihihihihihihihihi");
expect(repeat([4, 3]), undefined);
expect(repeat(["foo", "red"]), undefined);

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

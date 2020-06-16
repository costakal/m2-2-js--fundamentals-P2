// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q7
// Returns a new list with all the elements of lst that are length greater than 5

// lst is an array of strings

// go through the array and check for thw amount of characters in each item within the array
// if its greater than 5 characters that item needs to be moved into a new array
// we want to return the new array only with more than 5 characters

function keepLong(lst) {
  let longWords = lst.filter((word) => word.length > 5);
  return longWords;
}
// -------------------------------------------------------------------------
console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q9
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

function greetLong(lst) {
  const newSet = lst.filter(function (item) {
    return item.length >= 4;
  });
  const newArray = newSet.map(function (newItem) {
    return "Hello " + newItem;
  });
  return newArray;
}

console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));

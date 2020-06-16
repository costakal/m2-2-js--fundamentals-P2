// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q10
// Returns true if every element of lst is of length at least 5.
// Otherwise returns false.

// function goes through array and checks length of each item and >=5
// item that meet the condition get stored in new variable
//

function allLong(lst) {
  const longName = lst.every(function (num) {
    return num.length >= 5;
  });
  return longName;
}

console.log(allLong(["Scott", "Bob", "Ric", "Jim"]));
console.log(
  allLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

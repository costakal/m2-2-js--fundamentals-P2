# 2.1.8 - JavaScript Functions

---

## Functions in Math... 😱

<iframe
  width='840'
  height='472'
  src='https://www.youtube.com/embed/VhokQhjl5t0'
  frameborder='0'
  allowfullscreen
></iframe>

---

### Example 1

```js
// Formula for area of rectangle

length x width

// Turn that into a more math-like function...

A = length * width

// Define JavaScript function

const areaRectangle = function(length, width, unit) {
  return length * width;
}

// Call the JavaScript function

areaRectangle(17, 36);

```

---

### Example 2

```js
// Formula for area of circle

// Define JavaScript function

// Call the JavaScript function
```

---

## WT\* is this good for?

- Functions let you group and reuse code.
- _Define_ a function with parameters between the brackets.
- to _call_ the function (i.e. use it), you pass it arguments whose values take the place of the parameters in the function definition.
- The function acts just like any other expression when called.
- It produces the value you'd expect from the body of the function.

---

<Timer initialTime={10} />

### Exercise 1

```js
// Q1. Write a function that returns the sum of 3 numbers.

const sum = function(num1, num2, num3) {
  return num1 + num2 + num3;
}
sum(5, 5, 5)

// Q2. Write a function that returns the square of a number minus twice the number.

const math = function(num) {
  return (num * num) - (num * 2);
}
math(5)

// Q3. Write a function that returns the a person's full name, given their first and last names.

const fullName = function(first, last) {
  return first + ' ' + last;
  // OR USE THUS RETURN//
  return `${first} ${last}`
}
fullName('Costa', 'Kal')
```

---

<Timer initialTime={10} />

### Exercise 2

```js
// Q4. Write a function that returns the value of the tax for a given amount.

// Q5. Write a function that returns the value 42.

// Q6. Write a function that returns "Hello!".
```

---

- Functions are key in implementing software development principles.
- Complexity emerges from simplicity

[Alternate Function definition](https://www.cs.utah.edu/~germain/PPS/Topics/functions.html)

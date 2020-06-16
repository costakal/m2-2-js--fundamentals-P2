# 2.1.6 - JavaScript String Methods

---

## Methods

Methods have to be the most exciting part of JavaScript!

- Methods are special functions that reference the values of the data stored in the object.
- Methods are called with dot notation `object.method(arguments)`. _The period between object and method is the dot in dot notation._
- Because ALL of the data types we've learned about are actually objects, they all have a bunch of built-in methods and special properties.

---

For example, all objects have `toString` and `valueOf` methods.

```js
let num = 3;
num.toString();

let bool = true;
bool.toString();

let str = 'hello';
str.toString();

let arr = [1, 2, 'three'];
arr.toString();

let dip = { value: 3 };
dip.toString();
```

Let's look at the examples above again using `valueOf`.

---

- When programming with JavaScript we don't generally care that booleans, numbers and functions are objects. Their methods aren't that useful most of the time.

- The most helpful built-in methods are on strings and arrays.

_We'll talk more about objects and their methods later when we talk about creating our own methods._

---

## Common String Methods and Properties

Strings have a bunch of methods and properties that will be immediately useful. 😉

- `.length`
- `.replace()`
- `.slice()`
- `.concat()`
- `split()`
- `indexOf()`

📝 None of these methods **mutate** the string; strings are **immutable**.
📝 They return a new version of the string which you can then work with as you like.

---

### [`.length`](https://www.w3schools.com/jsreF/jsref_length_string.asp)

`.length` is a property that holds the # of characters in the string.

```js
// Example
const sentiment = 'I love programming';
sentiment.length;
```

---

### [`.replace()`](https://www.w3schools.com/jsreF/jsref_replace.asp)

The `.replace()` method replaces a specified value with another value in a string.

It takes 2 parameters, the value to replace and the new value.

```js
// Example
const food = 'I love bacon';
```

---

### [`.slice()`](https://www.w3schools.com/jsreF/jsref_slice_string.asp)

`.slice()` extracts a part of a string and returns the extracted part in a new string.

- The method takes 2 parameters: the start position, and the end position.

```js
// Example
const sentence = 'Bingo was his name.';

const name = sentence.slice(0, 5);
console.log(name)
```

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_string.asp)

The `.concat()` method is used to join two or more strings.

```js
// Example
let partOne = 'Do or do not.';
let partTwo = 'There is no try.';

let fullSentence = partOne.concat(partTwo);
console.log(fullSentence);

fullSentence = partOne.concat(' ').concat(partTwo)
```

---

### [`.split()`](https://www.w3schools.com/jsreF/jsref_split.asp)

The `.split()` method "split" a string into an array of _substrings_.

```js
// Example
const truth = 'The greatest teacher, failure is.';
truth.split(', '); //{}
```

---

### [`.indexOf()`](https://www.w3schools.com/jsreF/jsref_indexof.asp)

The `.indexOf()` method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

```js
// Example
let yodaSpeak =
  'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.';

  yodaSpeak.indexOf('dark side'); // 24
  yodaSpeak.indexOf('bacon'); // -1 --> the default if it can't find it
```

_Why would JavaScript decide to return `-1` instead of some other value? like `0`?_

---

# Exercises

Turn an input string into another string

---

<Timer initialTime={2} />

```js
const longSentence = 'I am a really long sentence, look how many words I have!';

const shorter = longSentence.slice(19, 37);
console.log(shorter);

// output: "sentence, look how"
```

---

<Timer initialTime={2} />

```js
const greeting = 'Hi World';
const newGreeting = greeting.replace('Hi', 'Hello');

console.log(newGreeting);


// output: "Hello world!"
```

---

<Timer initialTime={2} />

```js
const age = 'I am 23 years old!';

let ageAmended = age.replace(' 23 years', '');
console.log(ageAmended);

// OR //

const age = 'I am 23 years old!';

let ageAmended = age.slice(5, 13);
console.log(ageAmended);

// output: "I am old!"
```

---

<Timer initialTime={2} />

```js
const ask = 'How are you today?';

let yesterdayList = ask.replace('today','yesterday');
let todayList = yesterdayList.split(' ');
console.log(todayList);

// OR //

const ask = 'How are you today?';

let yesterdayList = ask.replace('today','yesterday').split(' ');;
console.log(yesterdayList);


// output: ["how", "are", "you", "yesterday?"]
```

---

## More String Methods here...

https://www.w3schools.com/jsreF/jsref_obj_string.asp

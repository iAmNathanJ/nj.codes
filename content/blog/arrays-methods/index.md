---
title: Array Methods
subtitle: Native Communication
date: 2019-01-17T03:38:57.137Z
---

There are a slew of useful array methods that have been added to JavaScript in recent years. There are also some that have existed since ES5, but maybe don't get enough attention. This is my list of favorites, based on their general utility and the code clarity they provide.

## Static Methods

### `Array.isArray`
<small>Available since ES5 - [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Browser_compatibility)</small>

This can be passed any argument to check whether something is an array. It's better than [duck typing](https://en.wikipedia.org/wiki/Duck_typing) for two reasons&mdash;It's reliable _and_ it's name clearly communicates what it does.

```js
Array.isArray([]); // => true
Array.isArray('string'); // => false
Array.isArray(undefined); // => false
Array.isArray(null); // => false
```

---

### `Array.from`
<small>Available since ES2015 - [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility)</small>

This creates a new array from any [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol).

```js
let iterable = 'abc';
Array.from(iterable); // => ['a', 'b', 'c']
```

[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is so nice that this method may not seem very useful, but `Array.from` accepts an optional second and third argument. The second is a mapping function to apply to each item at creation time. The third argument is for setting `this` context.

```js
Array.from('abc', letter => letter.toUpperCase());
// => ['A', 'B', 'C']
```

## Instance Methods

### `[].every`
<small>Available since ES5 - [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#Browser_compatibility)</small>

Check that every element in an array meets a certain criteria.

```js
let myArr = [1, 1, 6];
myArr.every(num => num < 5); // => false
myArr.every(num => num > 0); // => true
```

---

### `[].some`
<small>Available since ES5 - [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#Browser_compatibility)</small>

Check that at least one element in an array meets a certain criteria.

```js
let people = [
  { name: 'Ada' },
  { name: 'Grace' }
];
people.some(person => person.name === 'Grace');
// => true
```

Note: When called on an empty array, `some` will always return `false`. Conversely, `every` will always return `true`.

---

### `[].find`
<small>Available since ES2015 - [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Browser_compatibility)</small>

This method will find an item in an Array. It's similar to `some`, but it returns the found item itself or `undefined` if not found.

```js
let people = [
  { name: 'Ada' },
  { name: 'Grace' }
];
people.find(person => person.name === 'Ada');
// => { name: 'Ada' }
```

---

### `[].findIndex`
<small>Available since ES2015 - [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#Browser_compatibility)</small>

Just like `find`, but returns the index of the found item or `undefined` if not found.

---

### `[].includes`
<small>Available since ES2016 - [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Browser_compatibility)</small>

Check whether an array has a given value.

```js
let myArray = [1, 2, 3];
myArray.includes(9); // => false
myArray.includes(1); // => true
```

Note: this uses the SameValueZero [comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness), so it's great for finding prmitives values, but be aware of that objects will always be matched by reference.

From MDN:
> For any non-primitive objects x and y which have the same structure but are distinct objects themselves, all of the above forms will evaluate to false.

```js
let myObject = { foo: true }
let arrayWithObject = [ myObject ];
arrayWithObject.includes({ foo: true }); // => false
arrayWithObject.includes(myObject); // => true
```

## Please Polyfill
If you use [Babel](https://babeljs.io/) to compile your source code It's important to know that global object methods don't come for free as part of the code transform process.

Okay, that's only half true.

You can automate the addition of necessary polyfills with a little configuration - use [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) and make sure to set [`useBuiltIns`](https://babeljs.io/docs/en/babel-preset-env#usebuiltins) to `usage`.

<!-- .babelrc -->
```json
{
  "presets": [[
    "@babel/preset-env", {
      // highlight-next-line
      "useBuiltIns": "usage"
    }
  ]]
}
```

But the fact that you need to use polyfills at all alongside something like Babel, may not be obvious. Whatever polyfill strategy you use, just know that you will need to ensure these methods exist (whether native or not) before executing them in your target environent.

## Conclusion
You can get quite a lot done with basic arrays in JavaScript. If you use the right methods in the approproate places, your code will be one step closer to communicating intent.

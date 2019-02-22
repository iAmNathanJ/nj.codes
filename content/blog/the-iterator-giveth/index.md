---
title: The Iterator Giveth
subtitle: Syntactic Sweets
date: 2019-02-21T03:20:42.346Z
tags:
  - javascript
  - iterator
  - iterable
  - destructure
  - spread
---

A handful of objects in JavaScript are `iterable`. That is to say, they have a `Symbol.iterator` property that implements the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols "MDN - Iteration Protocols").

Did you know some of the best syntax features in JS rely on iterators? Here are some things they make possible.

## Destructuring
If you write JavaScript in 2019, you're likely aware of [destructuring assignment](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/). It's one of the best language features, so it's pretty much everywhere in a modern code base.

<!-- destructuring an array -->
```js
let folks = [ 'Everett', 'Pete', 'Delmar' ];
let [ a, b, c ] = folks; // <== destructuring!
a; // "Everett"
b; // "Pete"
c; // "Delmar"
```

The underlying mechanism that drives the assignment is the array's iterator - `Array.prototype[Symbol.iterator]`. But, arrays aren't the only `iterable` object we have. `Map` and `Set`, among others, are also iterable. So...

<!-- destructuring a set -->
```js
let mySet = new Set();
mySet.add(1); // {1}
mySet.add(2); // {1, 2}

let [ firstEntry, secondEntry ] = mySet;
firstEntry; // 1
secondEntry; // 2
```

<!-- destructuring a map -->
```js
let myMap = new Map();
myMap.set('foo', true); // {"foo" => true}
myMap.set('bar', false); // {"foo" => true, "bar" => false}

let [ firstEntry, secondEntry ] = myMap;
firstEntry; // ["foo", true]
secondEntry; // ["bar", false]
```

Whether or not you use destructuring on maps and sets is up to you. Maybe you won't, but they _do_ retain order, so it may come in handy. The point here isn't that you should necessarily do it, but understanding _why_ you _can_ do it should make you better at JavaScript. And maybe remove a little bit of the mystery around this language feature.

## For Of
The `for...of` statement is a good way to consume any iterable.

<!-- looping over a map -->
```js
let myMap = new Map();
myMap.set('first', 1);
myMap.set('second', 2);

for(let [key, value] of myMap) {
  console.log(key);   // first, second
  console.log(value); // 1, 2
}
```

Note the destructuring assignment in the `for...of` statement. That's an iterator inside an iterator. Seriously, the iterator of `myMap` returns this...

<!-- no-header -->
```js
[ ['first', 1], ['second', 2] ]
```

So `for...of` iterates each entry in the map (the outer array), and destructuring iterates the key/value of each entry (the inner arrays).

---

`NodeList` is a common iterable. [Even for IE](https://github.com/zloirock/core-js#iterable-dom-collections).

<!-- iterating a nodelist -->
```js
let nodes = document.querySelectorAll('p');

for (let node of nodes) {
  node.textContent = 'huzzoink';
}
```

Why use `for...of` instead of `forEach`? Well, it does give you a little more control since you can `break`, `continue`, and `return` from the loop. So if you ever want to limit your iteration, that's why.

NodeLists do not, however, come with the beloved `map`, `filter`, `reduce` methods. For that you'll want to convert those collections to an array. Which leads to the next iterator-driven feature...

## Spread Syntax
You can spread anything that is iterable. Strings are iterable.

<!-- no-header -->
```js
let name = 'Ada';
[...name]; // ["A", "d", "a"]
```

Of course arrays, maps, and sets&mdash;all iterable, and therefore, all spreadable. 

By the way, you should be using `Map` and `Set`. Working with them may not feel necessary a lot of the time, but knowing when to reach for them can be really valuable. Don't do it because I said so, instead check out these objective reasons...

1. Maps can use any data type as keys
1. They are iterable
1. Sets can only have unique values
1. They are iterable
1. Fast and easy lookup
1. Let me double check... yep, still iterable

The fact that you can spread `Map` and `Set` makes them easy to convert to plain arrays when you need to use your data in a specific context. Like when you need to serialize it. This is a common need for things like storage or when dealing with request/response bodies.

Converting to an array is good, but what about converting _from_ an array? You can construct maps and sets from arrays that match the shape of their spread output. So spread them on the way in, and reconstruct them on the way out. 

For instance:
<!-- localStorage -->
```js
// going in
localStorage.setItem('my-data', JSON.stringify({
  mySet: [...mySet],
  myMap: [...myMap]
}));

// coming out
let data = JSON.parse(localStorage.getItem('my-data'));
let giveMeBackMySet = new Set(data.mySet);
let giveMeBackMyMap = new Map(data.myMap);
```

Bonus: ES2019 will get [`Object.fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) which will make conversions between objects and maps really easy. Score.

## You Can Make Your Own
I hope it's helpful to know that some of the nicer syntax features in JavaScript are thanks to `Symbol.iterator`. If you're still unsure whether this is true, you can make your own.

<!-- Symbol.iterator -->
```js
let anIterableObject = {
  [Symbol.iterator]: function* () {
    let i = 0
    let list = [ 1, 2, 3 ];
    while(i < list.length) {
      yield list[i];
      i++;
    }
  }
}
```

#### ...and you can destructure it
<!-- no-header -->
```js
let [ one, two, three ] = anIterableObject;
one; // 1
two; // 2
three; // 3
```

#### ...and you can loop over it
<!-- no-header -->
```js
for (let value of anIterableObject) {
  alert(value);
}
// 1, 2, 3

```

#### ...and you can spread it 
<!-- no-header -->
```js
[...anIterableObject] // [1, 2, 3]
```

## Conclusion
The next time you ask yourself if you can spread or destructure something, just ask if it has a `[Symbol.iterator]` property, and you'll know. And consider using `Map` and `Set`, if you aren't already. They can be very useful. ❤️

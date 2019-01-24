---
title: Iterators Are Why...
subtitle: We Can Have Nice Things
date: 2019-01-23T03:04:17.702Z
---

## Iterators Are Why We Have Spread Syntax

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

[...anIterableObject] // => [1, 2, 3]
```

## Iterators Are Why You Should Use Maps and Sets

Ok, it's not the only reason, but it helps.  

By now you should know that iterators are the reason that spread syntax works. `Maps` and `Sets` are iterable, so we can use that to make working with them a little less cumbersome. I'm calling this out specifically because I think these particular data structures are useful, but I don't see them being used enough. At least not in the project I typically work on.

It's common to need to serialize data and store it in a JSON string. I'll use `localStorage` as an example. Assume we have some kind of component that wants to keep a collection of unique user ids, using a `Set` would probably be the best data structure to handle this.

```js

localStorage

You can also construct Maps and Sets with output shaped the same as their spread values. If you need to serialize data (`JSON.stringify`), you'll want to spread them to arrays before doing so. But when you parse them back (`JSON.parse`), then you can easily reconstruct and go about your business.

```js
const myMap = new Map();
const mySet = new Set();

myMap.set('foo', true);
mySet.add(1);

const storageString = JSON.stringify({
  myMap: [...myMap],
  mySet: [...mySet]
});

const parsedStorage = JSON.stringify(storageString);
```

## Iterators Are Why We Can Destructuring Arrays


## Iterators Are Why We Have `for of`

```js
const object = {
  foo: true,
  bar: false
};

for(let [ key, val ] of Object.entries(object)) {
  console.log(key); // => foo, bar
  console.log(val); // => true, false
}
```

Iteratorception.

So the next time you ask yourself if you can spread something, just ask if it has a `[Symbol.iterator]` property, and you'll know.

---
title: Destructuring
subtitle: The Good & the Bad
tags:
  - javascript
  - destructuring
date: 2019-01-09T14:51:25.756Z
---

## The Basics
Many of you will know the basics of destructuring syntax in JavaScript. I'll use object destructuring as the basis for most of the examples here, but rules will apply to both objects _and_ arrays, with a couple exceptions. So what are the differences? One is that with objects, you select keys by name, and with arrays, selections are positional.

<!-- destructure by name for objects -->
```js
let obj = {
  propertyZero: 0,
  propertyOne: 1
};
let { propertyZero } = obj;
// propertyZero => 0
```

<!-- destructure positionally for arrays -->
```js
let arr = [0, 1];
let [ indexZero ] = arr;
// indexZero => 0
```

Note the added benefit of being able to name the variable anything we want in the array version. Which leads to the next difference between the two. With arrays, you are forced to pick a name for the item(s) you destructure. With objects, a _specific_ name is required to target propertie(s). But you can still rename them if you want.

```js
let obj = {
  propertyZero: 0,
  propertyOne: 1
};
let { propertyZero: zero, propertyOne: one } = obj;
// zero => 0
// one => 1
```

Neato.

## Where Can Destructuring Happen?
Answer: Anywhere you would assign an expression to an identifier.

- regular variable assignments
- function parameters
- control structure variable assignment (loops and stuff)

```js
function(obj) {
  let { foo, bar } = obj;
}

// can be rewritten like this
function({ foo, bar }) {
  ...party
}

// assignments also happen in loops
for (let [ key, value ] of Object.entries(obj)) {
  ...sizzleSaysWhat
}
```

## { Defaults = true }
Defaults handle `undefined` only and I will repeat that.  

Defaults handle `undefined` only.

We can apply default values to destructuring assignments, just like we do function parameters.

<!-- destructure with default value -->
```js
let { doesntExist = 1 } = {};
// doesntExist => 1
```

<!-- works for arrays too 🤓 -->
```js
let [ nothingHere = 1 ] = [];
// nothingHere => 1
```

Did I mention that defaults handle `undefined` only?


Reminder: Defaults will not be applied to [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values. Values such as `0`, `false`, and `null` are meaningful. They are typically intentional and so those values will be destructured and assigned accordingly. Only in the case of `undefined`, will the default value apply. This is also true for function parameter defaults.

## Nested

## Ok, That Shit is Confusing
Yep. It is.

With all the power destructuring gives us, it also enables us to write really confusing code. 🤚🏻 Guilty.

<!-- not a very nice thing to do to your co-workers -->
```js
function({ foo: [ bar: { baz: fook = true } ] }) {
  // what is life?
}
```

Destructuring is easily one of the best features to ever have made it into the spec, but please don't abuse it.

That is all. Take care now.

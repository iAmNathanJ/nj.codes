---
title: CSS Custom Properties
subtitle:
date: 2019-01-21T03:09:08.815Z
tags:
  - CSS
  - JavaScript
  - Custom Properties
  - Houdini
---

## What are Custom Properties

<!-- JS -->
```js
CSS.defineProperty({
  name: '--my-property',
  syntax: '<length>',
  initialValue: '10px',
  inherits: true
});
```

<!-- CSS -->
```css
.my-div {
  --my-property: 100px;
}
```

Okay... so what does that do?

## Benefits in JavaScript

## Bonus
Level 2 of the properties and values spec will bring [a new @-rule](https://github.com/w3c/css-houdini-drafts/issues/137) to define custom properties with CSS alone, which is _awesome_! 

Here's the proposed syntax:

<!-- Level 2 Spec -->
```css
@property --highlight-color {
  syntax: "<color>";
  initial-value: red;
  initial-value: lighten(maroon);
  inherits: true;
}
```

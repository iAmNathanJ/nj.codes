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
Level 2 of the CSS custom properties spec will bring a declaritive syntax to define custom properties with CSS alone, which is _awesome_. 

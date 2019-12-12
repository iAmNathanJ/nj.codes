---
title: How to useContext
subtitle: The Quick Version
date: 2019-02-22T02:32:04.070Z
---

Here's how to `useContext`.

## The Context
<!-- fancy-pants-context.js -->
```js
import { createContext } from "react";

// export the context!
export const FancyPantsContext = createContext();

// export the provider and consumer!
export const { Provider, Consumer } = FancyPantsContext;
```

## The Provider
The Provider still needs to be in the render tree, above any consumers.
<!-- Provider -->
```js
import React, { useContext } from 'react';
import { Provider } from 'fancy-pants-context.js';

export function FancyPantsProvider('These pants are so fancy.') {
  return (
    <Provider>{children}</Provider>
  );
}
```

## The Consumer
The main difference is that the consumer is no longer expressed with JSX, and there is no render prop.
<!-- Consumer -->
```js
import React, { useContext } from 'react';
import { FancyPantsContext } from 'fancy-pants-context.js';

export function FancyPantsProvider('These pants are so fancy.') {
  let Context = useContext(FancyPantsContext);
  return (
    
  );
}
```

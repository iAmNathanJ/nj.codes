---
title: Hey, React!
subtitle: Hooks Me Up With That
date: 2019-02-11T00:37:09.966Z
tags:
  - react
  - hooks
  - custom
  - useEffect
  - useState
  - useRef
---

TLDR; Here's my first custom hook - [useMenuInteractions](https://github.com/iAmNathanJ/nj.codes/blob/master/src/hooks/use-menu-interactions.js).

[React v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) was realeased last week and, well, I guess it's kind of a big deal. So in an effort to get comfortable with the new features in this release, I figured it would be a good exercise to convert my blog to 100% function components with [React hooks](https://reactjs.org/docs/hooks-reference.html).

I didn't get very far. I had to stop and write this blog post because my brain melted and my heart exploded with joy.

## React Hooks
Before we go any further, I'm writing this with the assumption that you're already familiar with the concept of hooks in React. If not, you might want to go read the [hooks intro page](https://reactjs.org/docs/hooks-intro.html) or watch this video of [Dan Abromov demonstrating the feature](https://youtu.be/dpw9EHDh2bM?t=685).

## My Use Case
I'll be honest, converting this blog to use hooks is totally unnecessary. It just doesn't need it. It's relatively simple (as most blogs are) and has very little happening client-side. Still, I thought it would be a good way to dip my feet. As I was working my way through the code, I realized the "revisions" feature might be a good use case for a custom hook. I'll explain.

Each article on this blog, with more than one commit, pulls in it's own git history at build time and displays a menu of links to past revisions. (I added an extra commit to this one so you can see the feature at the top of this post) Anyway, don't worry about the git specific stuff&mdash;it's just a dropdown menu.

Here's what the `<RevisionList/>` component looked like after being written initially with hooks. The code is slightly simplified from my actual source so you can focus on the parts that matter.
<!-- <RevisionList /> - round 1 -->
```js
function RevisionList({ file, revisions }) {
  const [ menuOpen, setMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(open => !open);
  }

  return (
    <Fragment>
      <button onClick={toggleMenu}>
        {menuOpen ? '-' : '+'} history
      </button>
      <ul hidden={!menuOpen}>
        {revisions.map(({ sha1, date }) => (
          <li key={sha1}>
            <RevisionLink
              file={file}
              sha1={sha1}
              date={date}
            />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
```

🤔 hmm... I probably should've used an ordered list for this. They _are_ ordered by date. Oh well, I'll do that later. Back to the drop down menu for revisions.

## Problem
There's no way to close the dropdown with the keyboard. Clicking or focusing outside of the menu doesn't close it either.

I'm sure there's more wrong with it than just those couple things, but everything is a work in progress here, so... For the time being, these are the simple requirements I need to satisfy:
- clicking on the page body or anything outside the menu should close the dropdown
- tabbing to an element (forward or back) outside of the menu should close the dropdown.
- pressing the escape key should close the dropdown

With that in mind, let's see what hooks can do! 😄

---

First we'll add [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref), for the top level element of the menu.

<!-- no-header -->
```js
function RevisionList2({ file, revisions }) {
  const menuRef = useRef();
  const [ open, setOpen ] = useState(false);
  ...
  return (
    <div ref={menuRef}>
      ...
    </div>
  );
}
```

We're going to use the [event delegation](https://javascript.info/event-delegation) pattern and set a couple of listeners on the document. We'll then use the element ref to decide how to handle the events. We'll also add [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) to attach those event listeners. Still in the same component:

<!-- no-header -->
```js
function focusHandler(e) {
  if (!menuRef.current.contains(e.target)) {
    setOpen(false);
  }
}

function keyHandler(e) {
  if (e.key === 'Escape') {
    setOpen(false);
  }
}

useEffect(() => {
  document.addEventListener('focusin', focusHandler);
  document.addEventListener('keydown', keyHandler);
});
```

The `focusin` event will fire for keyboard navigation, as well as clicking on any element. So all we need to do is check that the event target is not within the `menuRef`, and if so, close the menu. That covers tabbing _out_ of the menu, as well as clicking the body, or something else.

The `keydown` handler is simpler. It should probably only close the menu if something within the menu has focus when the event fires, but in an effort to keep this simple, I'm ommiting that behavior.

We can improve this `useEffect` though. It should return a function to do any necessary cleanup. React will invoke the function when updating or unmounting our component. But we also don't want that to happen too often (if ever) within it's lifecycle, so we'll add the second argument which is an array of values that, if changed, will trigger the effect. This way they effect won't run more than it needs to.
<!-- no-header -->
```js
useEffect(() => {
  document.addEventListener('focusin', focusHandler);
  document.addEventListener('keydown', keyHandler);
  return () => {
    document.removeEventListener('focusin', focusHandler);
    document.removeEventListener('keydown', keyHandler);
  };
}, [menuRef.current]);
```

I don't actually know if it makes sense to make the effect dependent on the ref since the ref should exist for the entire lifetime of the component. Might be better to pass an empty array, which would essentially do the same thing. I think? I don't know. If someone nice can tell me, please do.

So anyway here's the full component with hooks, and events.
<!-- <RevisionList /> - round 2 -->
```js
function RevisionList2({ file, revisions }) {
  const menuRef = useRef();
  const [ open, setOpen ] = useState(false);

  function focusHandler(e) {
    if (!menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  }

  function keyHandler(e) {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }
  
  useEffect(() => {
    document.addEventListener('focusin', focusHandler);
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('focusin', focusHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [menuRef.current]);

  return (
    <div ref={menuRef}>
      <button onClick={toggle}>
        {open ? '-' : '+'} history
      </button>
      <ul hidden={!open}>
        {revisions.map(({ sha1, date }) => (
          <li key={sha1}>
            <RevisionLink
              file={file}
              sha1={sha1}
              date={date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Great, that's a lot better. I can already see how this is less tedious than using a class component to do the same thing. But I don't love the fact that the component is growing. This is just the beginning, and in a real-world scenario i.e. not my blog, edge-cases and new requirements will be discovered. Features will be added.

Luckily, React allows you to create custom hooks. That means all (or some) of these hooks can be moved to their own file&mdash;a home just for the interaction handlers. I think it makes sense to do that.

## Custom Hook: `useMenuInteractions`
Here's the same functionality in a custom hook that can be used by the original component without adding bloat.

<!-- useMenuInteractions -->
```js
export function useMenuInteractions(menuRef) {
  const [ open, setOpen ] = useState(false);

  function toggle() {
    setOpen(open => !open);
  }

  function focusHandler(e) {
    if (!menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  }

  function keyHandler(e) {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  function register() {
    document.addEventListener('focusin', focusHandler);
    document.addEventListener('keydown', keyHandler);
  }

  function unregister() {
    document.removeEventListener('focusin', focusHandler);
    document.removeEventListener('keydown', keyHandler);
  }

  useEffect(() => {
    register();
    return unregister;
  }, [menuRef.current]);

  return [ open, toggle ];
}
```

This is just a function with one parameter for a ref. It returns one boolen (`open`) and one method to flip it back and forth (`toggle`). The requirements to use the hook are as follows:
- a React component with...
- a ref that wraps...
- any control to call toggle and...
- any element to express the state of the toggle.

It's not just usable in my "revisions" component. It could be used for any dropdown-like menu, or hide/show functionality. I now have a reusable hook that's composable. No classes. No HOCs. No render props.

## Final Component
I actually shaved a few lines of code off the original component.
<!-- <RevisionList /> - final -->
```js
function RevisionList({ file, revisions }) {
  const menuRef = useRef();
  const [ menuOpen, toggleMenu ] = useMenuInteractions(menuRef);

  return (
    <div ref={menuRef}>
      <button onClick={toggleMenu}>
        {menuOpen ? '-' : '+'} history
      </button>
      <ul hidden={!menuOpen}>
        {revisions.map(({ sha1, date }) => (
          <li key={sha1}>
            <RevisionLink
              file={file}
              sha1={sha1}
              date={date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Conclusion  
React is already an increadibly useful library. Now, hooks give us the ability to define state, logic and behavior in separate, little functions that can be composed together in a way that is quite magical. So far, I like it.

---

Find a typo? Have a suggestion to make this better? Let me know on [twitter](https://twitter.com/nathanAlan), or better yet, [suggest an edit on GitHub](https://github.com/iAmNathanJ/nj.codes/edit/master/content/blog/use-menu-interactions/index.md).

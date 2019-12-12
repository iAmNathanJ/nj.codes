---
title: DOMParser
date: 2019-02-24T16:32:48.554Z
---

Browsers have a standalone `DOMParser` built in. Seems kind of obvious since, uh... parsing documents is their primary purpose. Anyway, It's available for `HTML` and `SVG` back to IE 10. Here are a couple things you might use it for.

---

Need to scrape a web page client side? `DOMParser` has your back.

<!-- DOMParser compatibility -->
```js
(async () => {
  let html = await fetch(
    'https://developer.mozilla.org/en-US/docs/Web/API/DOMParser'
  );
  
  let doc = new DOMParser().parseFromString(
    await html.text(),
    'text/html'
  );
  
  // doc will be a document object with all the web APIs
  scrapeIt(doc);
})();

function getBrowserSupport(mdnDoc) {
  let compatTable = mdnDoc.querySelector('.bc-table');
  
  function createRow(row) {
    let compatLevel = row.querySelector('th').textContent;
    let browsers = [...row.querySelectorAll('td')]
      .map(cell => cell.lastChild.textContent.trim());
    return [ compatLevel, ...browsers ];
  };
  
  let columns = [...compatTable.querySelectorAll('.bc-head-txt-label')]
    .map(column => column.textContent);
  
  let header = ['❤ COMPATIBILITY', ...columns];
  
  let rows = [...compatTable.querySelectorAll('tbody tr')].map(createRow);

  return [ header, ...rows ];
}
```

---

Need to dynamically fetch an SVG from the network and inline it? `DOMParser` will be there for you.

```js
// fetch('https://developer.mozilla.org/static/emojis/thumbs-down.63ec272cd3f4.svg')
fetch('/path/to/asset.svg')
  .then(res => res.text())
  .then(string => new DOMParser().parseFromString(string, 'image/svg+xml'))
  .then(svg => {
    svg.querySelectorAll('path').forEach(p => p.style.fill = 'snow');
    document.body.innerHTML = svg.documentElement.outerHTML;
  });
```

---

That's it, friends. Take care now.

# fix-flex-element-not-shrinking
Fix for flex element with a span that is not shrinking on browser window is resized, by using "min-width: 0" on the flex element (default is "auto")
```
  <div style={{ display: "flex"}}>
    <div style={{ display: "flex" }}>
      <span>some text</span>
    </div>
  </div>
```

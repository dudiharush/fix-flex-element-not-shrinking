# fix-flex-element-not-shrinking
Fix for flex container with a flex child that has content that is not shrinking when parent element shrinks, by using "min-width: 0" on the flex child (default is "auto")
```
  <div style={{ display: "flex", width: "100%"}}>
    <div style={{ display: "flex" }}>
      <span>some text</span>
    </div>
  </div>
```

[codesandbox](https://codesandbox.io/s/fix-flex-element-not-shrinking-qg6gx) example

import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        Fix for flex with span that is not shrinking, by using "min-width: 0" on
        flex (default is "auto")
      </div>

      <div style={{ display: "flex", minWidth: 0, backgroundColor: "red" }}>
        <span
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          123456789123456789123456789123456789123456789123456789123456789123456789
        </span>
      </div>
    </div>
  );
}

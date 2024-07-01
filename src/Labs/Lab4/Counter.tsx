import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-success"
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        style={{ marginLeft: "6px" }}
        onClick={() => {
          setCount(count - 1);
        }}
        className="btn btn-danger"
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}

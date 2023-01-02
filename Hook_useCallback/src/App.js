import "./styles.css";
import Content from "./Content.js";
import { useState, useCallback } from "react";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
// - Reference types
// - React memo()

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div className="App">
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;

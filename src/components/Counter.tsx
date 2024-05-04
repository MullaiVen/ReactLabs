import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../styles/Counter.css";

const Counter = () => {
  const initialCount = parseInt(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const maxCount = 100;
  const colorValue = Math.min(255, Math.floor((count / maxCount) * 255));
  const backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

  return (
    <>
      <div className="counter" style={{ backgroundColor }}>
        <div className="output">{count}</div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={decrement}>
            -
          </Button>
          <Button variant="contained" onClick={reset}>
            Reset
          </Button>
          <Button variant="contained" onClick={increment}>
            +
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Counter;

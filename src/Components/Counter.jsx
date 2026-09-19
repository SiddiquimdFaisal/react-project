import { useState } from "react";
import Button from "../Components/Button";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className="card">

      <h2>Counter</h2>

      <div className="counter">
        {count}
      </div>

      <div className="button-row">

        <Button
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>

        <Button
          onClick={() => setCount(0)}
        >
          Reset
        </Button>

        <Button
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>

      </div>

    </div>
  );
}

export default Counter;
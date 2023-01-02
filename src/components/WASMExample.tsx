import { useState, useContext } from "react";
import { WASMContext } from "../context/WASM";

export const WASMExample = () => {
  const ctx = useContext(WASMContext);

  if (!ctx.wasm) {
    return <>...</>;
  }

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState<number | undefined>(0);

  const addNums = () => {
    setResult(ctx.wasm?.add(num1, num2));
  };

  // return <>Computed from WASM: 4+3={ctx.wasm.add(4,3)}</>
  return (
    <div>
      <input
        type="number"
        name="num1"
        id="num1"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        name="num2"
        id="num2"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button onClick={addNums}>Add</button>
      <h2>The result is: {result}</h2>
    </div>
  );
};

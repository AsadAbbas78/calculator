'use client'
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        setResult("Error: Invalid Expression");
        console.error("Error evaluating expression:", error);
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-5xl text-white font-bold font-serif ">
          Calculator
        </h1>
        <div className="bg-[#1e242b] p-6 rounded border-[#6fddfb] border-2 mt-6">
          <input
            type="text"
            className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
            value={expression}
            readOnly
          />
          <input
            type="text"
            className="w-[00px] text-1xl font-bold mb-1 focus-outline"
            value={result}
            readOnly
          />
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className="text-2xl bg-[#6fddfb] hover:bg-transparent hover:text-[#6fddfb] hover:border-[#6fddfb] hover:border-2 p-2 rounded-lg"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
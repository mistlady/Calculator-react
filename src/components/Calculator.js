import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../style/Calculator.css";

const evaluateExpression = (expression) => {
  try {
    expression = expression.replace(/\s+/g, "");

    if (/^[0-9+\-*/.()]+$/.test(expression)) {
      expression = expression.replace(/--/g, "+");

      return new Function("return " + expression)();
    } else {
      throw new Error("Invalid expression");
    }
  } catch (e) {
    return "Error";
  }
};

const Calculator = () => {
  const [Input, setInput] = useState("");
  const [Result, setResult] = useState("");
  const [theme, setTheme] = useState("light");

  const HandleInput = (value) => {
    setInput(Input + value);
  };

  const Clear = () => {
    setInput("");
    setResult("");
  };

  const Equal = () => {
    setResult(evaluateExpression(Input));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      <div className="display">
        <input type="text" value={Input} readOnly />
        <div>{Result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => HandleInput("1")}>1</button>
        <button onClick={() => HandleInput("2")}>2</button>
        <button onClick={() => HandleInput("3")}>3</button>
        <button onClick={() => HandleInput("+")}>+</button>

        <button onClick={() => HandleInput("4")}>4</button>
        <button onClick={() => HandleInput("5")}>5</button>
        <button onClick={() => HandleInput("6")}>6</button>
        <button onClick={() => HandleInput("-")}>-</button>

        <button onClick={() => HandleInput("7")}>7</button>
        <button onClick={() => HandleInput("8")}>8</button>
        <button onClick={() => HandleInput("9")}>9</button>
        <button onClick={() => HandleInput("*")}>*</button>

        <button onClick={() => HandleInput("0")}>0</button>
        <button onClick={Clear}>C</button>
        <button onClick={Equal}>=</button>
        <button onClick={() => HandleInput("/")}>/</button>
      </div>
    </div>
  );
};
export default Calculator;

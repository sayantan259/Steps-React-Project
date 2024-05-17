import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrev() {
    step > 1 ? setStep((s) => s - 1) : setStep(step);
  }
  function handleNext() {
    step < 3 ? setStep((s) => s + 1) : setStep(step);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : " "}`}>1</div>
            <div className={`${step >= 2 ? "active" : " "}`}>2</div>
            <div className={`${step >= 3 ? "active" : " "}`}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <Button color={"#fff"} bgColor={"#7950f2"} onclick={handlePrev}>
              <span>👈 Previous</span>
            </Button>
            <Button color={"#fff"} bgColor={"#7950f2"} onclick={handleNext}>
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ color, bgColor, onclick, children }) {
  return (
    <button
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

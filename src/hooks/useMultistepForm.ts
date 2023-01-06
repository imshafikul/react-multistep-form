import { ReactElement, useState } from "react";

export default function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((index) => {
      if (index >= steps.length) return index;
      return index + 1;
    });
  }

  function back() {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    next,
    back,
    goTo,
    steps,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    setCurrentStepIndex,
  };
}

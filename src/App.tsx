import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import Address from "./components/forms/Address";
import PersonalInfo from "./components/forms/PersonalInfo";
import RegisterForm from "./components/forms/Register";
import RegisteredInfo from "./components/RegisteredInfo";
import useMultistepForm from "./hooks/useMultistepForm";
import { FormData } from "./types";

const INITIAL_DATA: FormData = {
  username: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  age: 1,
  street: "",
  city: "",
  state: "",
  zip: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const {
    goTo,
    back,
    next,
    isFirstStep,
    isLastStep,
    step,
    currentStepIndex,
    steps,
    setCurrentStepIndex,
  } = useMultistepForm([
    <RegisterForm {...data} updateFileds={updateFileds} />,
    <PersonalInfo {...data} updateFileds={updateFileds} />,
    <Address {...data} updateFileds={updateFileds} />,
  ]);

  function updateFileds(fields: Partial<FormData>) {
    setData((prevData) => ({
      ...prevData,
      ...fields,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    setInfoModalOpen(true);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="p-4 my-5 position-relative">
        <div className="form-step-count position-absolute opacity-50">
          {currentStepIndex + 1} / {steps.length}
        </div>

        {step}

        <Stack
          gap={2}
          direction="horizontal"
          className="justify-content-end mt-4"
        >
          {!isFirstStep && (
            <Button variant="secondary" onClick={back}>
              Back
            </Button>
          )}
          <Button type="submit" variant="primary">
            {isLastStep ? "Finish" : "Next"}
          </Button>
        </Stack>
      </Form>

      <RegisteredInfo
        show={isInfoModalOpen}
        handleClose={() => {
          setInfoModalOpen(false);
          setData(INITIAL_DATA);
          setCurrentStepIndex(0);
        }}
        {...data}
      />
    </>
  );
}

export default App;

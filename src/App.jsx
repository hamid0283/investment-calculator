import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";

export default function App() {
  const [userInputsData, setUserInputsData] = useState({
    initialInvestment: 20000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  function handleInputsDataChange(modifiableInput, newValue) {
    setUserInputsData((prevState) => {
      return {
        ...prevState,
        [modifiableInput]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInputs
        inputsValue={userInputsData}
        onModify={handleInputsDataChange}
      />
    </>
  );
}

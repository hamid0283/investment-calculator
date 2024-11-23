import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Result from "./components/Result";

export default function App() {
  const [userInputsData, setUserInputsData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputsDataChange(modifiableInput, newValue) {
    setUserInputsData((prevState) => {
      return {
        ...prevState,
        [modifiableInput]: +newValue,
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
      <Result inputsValue={userInputsData} />
    </>
  );
}

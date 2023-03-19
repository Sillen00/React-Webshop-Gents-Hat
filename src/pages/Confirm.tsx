import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

function Confirm() {
  const { formValues } = useContext(FormContext);
  return (
    <>
      <h2>Confirm</h2>
      {console.log(formValues.fullName)}
    </>
  )
}

export default Confirm

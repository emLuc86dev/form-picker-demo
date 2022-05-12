import { createContext, useReducer } from "react";
import { formReducer, initialState } from "./formReducer";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [{ image, name, domain, workers, colorHex, isValid }, dispatch] =
    useReducer(formReducer, initialState);

  // const isValidToSend = () => {
  //  dispatch({type: 'VALID'})
  // };

  return (
    <FormContext.Provider
      value={{
        image,
        name,
        domain,
        workers,
        colorHex,
        isValid,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;

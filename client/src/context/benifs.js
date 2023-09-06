import { useState, useContext, createContext } from "react";

const BenifContext = createContext();

const BenifProvider = ({ children }) => {
  const [benif, setBenif] = useState([]);
  return (
    <BenifContext.Provider value={[benif, setBenif]}>
      {children}
    </BenifContext.Provider>
  );
};

//custom hook
const useBenif = () => useContext(BenifContext);

export { useBenif, BenifProvider };

import { useColorMode } from "@chakra-ui/react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const { colorMode, setColorMode } = useColorMode();

  const handleColorMode = (value) => {
    // console.log(value,colorMode);
    if (value) {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  };
  return (
    <ThemeContext.Provider value={{ handleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { ReactNode, createContext, useState } from "react";

interface defaultValueInterface {
    colour: string;
    setColour: (value: string) => void;
    size: number;
    setSize: (value: number) => void;
}

const defaultValue: defaultValueInterface = {
  colour: "#000000",
  setColour: () => {},
  size: 10,
  setSize: () => {},
};

export const BrushContext = createContext(defaultValue);

export const BrushContextProvider = ({children}: {children: ReactNode}) => {
    const [colour, setColour] = useState(defaultValue.colour); // Default color is black
    const [size, setSize] = useState(defaultValue.size); // Default size is 10

  return (
    <BrushContext.Provider
      value={{
        colour, 
        setColour,
        size,
        setSize
      }}
    >
      {children}
    </BrushContext.Provider>
  );
};
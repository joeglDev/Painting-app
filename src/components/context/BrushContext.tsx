import { ReactNode, createContext, useState } from "react";

interface defaultValueInterface {
  colour: string;
  setColour: (value: string) => void;
  size: number;
  setSize: (value: number) => void;
  opacity: number;
  setOpacity: (value: number) => void;
}

const defaultValue: defaultValueInterface = {
  colour: "#000000",
  setColour: () => {},
  size: 10,
  setSize: () => {},
  opacity: 1,
  setOpacity: () => {},
};

export const BrushContext = createContext(defaultValue);

export const BrushContextProvider = ({ children }: { children: ReactNode }) => {
  const [colour, setColour] = useState(defaultValue.colour); 
  const [size, setSize] = useState(defaultValue.size);
  const [opacity, setOpacity] =useState(defaultValue.opacity);

  return (
    <BrushContext.Provider
      value={{
        colour,
        setColour,
        size,
        setSize,
        opacity,
        setOpacity
      }}
    >
      {children}
    </BrushContext.Provider>
  );
};

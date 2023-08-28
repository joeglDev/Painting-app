import { ReactNode, createContext, useState } from "react";

interface defaultValueInterface {
  colour: string;
  setColour: (value: string) => void;
  size: number;
  setSize: (value: number) => void;
  savedCanvas:  HTMLCanvasElement | null;
  setSavedCanvas: (value:  HTMLCanvasElement | null) => void;
  loadCanvas: boolean;
  setLoadCanvas: (value: boolean) => void;
}

const defaultValue: defaultValueInterface = {
  colour: "#000000",
  setColour: () => {},
  size: 10,
  setSize: () => {},
  savedCanvas: null,
  setSavedCanvas: () => {},
  loadCanvas: false,
  setLoadCanvas: () => {},
};

export const BrushContext = createContext(defaultValue);

export const BrushContextProvider = ({ children }: { children: ReactNode }) => {
  const [colour, setColour] = useState(defaultValue.colour); // Default color is black
  const [size, setSize] = useState(defaultValue.size); // Default size is 10
  const [savedCanvas, setSavedCanvas] = useState(defaultValue.savedCanvas);
  const [loadCanvas, setLoadCanvas] = useState(defaultValue.loadCanvas);

  return (
    <BrushContext.Provider
      value={{
        colour,
        setColour,
        size,
        setSize,
        savedCanvas,
        setSavedCanvas,
        loadCanvas,
        setLoadCanvas,
      }}
    >
      {children}
    </BrushContext.Provider>
  );
};

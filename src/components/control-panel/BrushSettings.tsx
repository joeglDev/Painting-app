import { ChangeEvent, useContext } from "react";
import { BrushContext } from "../context/BrushContext";
import {
  BrushSettingsLabel,
  BrushSettingsLi,
  BrushSettingsUl,
  BrushSettingsWrapper,
  H2,
} from "./BrushSettings.style";

export const BrushSettings = () => {
  const { colour, setColour, size, setSize } = useContext(BrushContext);

  return (
    <BrushSettingsWrapper>
      <H2>Brush settings</H2>
      <BrushSettingsUl>
        <BrushSettingsLi>
          <BrushSettingsLabel htmlFor="size-input">Size: </BrushSettingsLabel>
          <input
            type="number"
            value={size}
            id="number-input"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSize(parseInt(e.target.value))
            }
          />
        </BrushSettingsLi>
        <BrushSettingsLi>
          <BrushSettingsLabel htmlFor="colour-input">
            Colour:{" "}
          </BrushSettingsLabel>
          <input
            type="color"
            value={colour}
            id="colour-input"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setColour(e.target.value)
            }
          />
        </BrushSettingsLi>
      </BrushSettingsUl>
    </BrushSettingsWrapper>
  );
};

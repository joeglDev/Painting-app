import { ChangeEvent, useContext } from "react";
import { BrushContext } from "../context/BrushContext";
import { styled } from "styled-components";

const BrushSettingsWrapper = styled.article`
  margin: 1rem;
  background-color: #828282;
  position: relative;
  height: 30vh;
`;

const BrushSettingsUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
`;

const BrushSettingsLabel = styled.label`
  min-width: 75px;
  display: inline-block;
`;

const BrushSettingsLi = styled.li`
  margin: 0 1.2rem 0 0;
`;

const H2 = styled.h2`
  text-align: center;
`;

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

import { ChangeEvent, useContext, useState } from "react";
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
  gap: 5vh;
`;

const BrushSettingsLabel = styled.label`
  min-width: 5vw;
  display: inline-block;
`;

const BrushSettingsLi = styled.li`
  margin: 0 2vw 0 0;
`;

const BrushSettingsInput = styled.input`
position: relative;
width: 8vw;
`; 

const H2 = styled.h2`
  text-align: center;
`;

export const BrushSettings = () => {
  const { colour, setColour, size, setSize, setOpacity } = useContext(BrushContext);
  const [displayOpacity, setDisplayOpacity] = useState('1.00');

 const onChangeOpacity = (e: ChangeEvent<HTMLInputElement>) => {
  setDisplayOpacity(e.target.value);
 if (/\d+$/.test(e.target.value)) setOpacity(parseFloat(e.target.value));
 };  

  return (
    <BrushSettingsWrapper>
      <H2>Brush settings</H2>
      <BrushSettingsUl>

        <BrushSettingsLi>
          <BrushSettingsLabel htmlFor="size-input">Size: </BrushSettingsLabel>
          <BrushSettingsInput
            type="number"
            value={size}
            id="number-input"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSize(parseInt(e.target.value))
            }
          />
        
          </BrushSettingsLi>

          <BrushSettingsLi>
          <BrushSettingsLabel htmlFor="opacity-input">Opacity: </BrushSettingsLabel>
          <BrushSettingsInput type="number" value={displayOpacity} id="opacity-input" min="0" max="1" step="0.01"
          onChange={onChangeOpacity}
          ></BrushSettingsInput>
        </BrushSettingsLi>

        <BrushSettingsLi>
          <BrushSettingsLabel htmlFor="colour-input">
            Colour:{" "}
          </BrushSettingsLabel>
          <BrushSettingsInput
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

import { styled } from "styled-components";
import { BrushSettings } from "./BrushSettings";

const ControlPanelWrapper = styled.section`
  flex: 20;
  background-color: #424242;
  padding: 1rem;
`;

export const ControlPanel = () => {
  return (
    <ControlPanelWrapper>
      <BrushSettings></BrushSettings>
    </ControlPanelWrapper>
  );
};

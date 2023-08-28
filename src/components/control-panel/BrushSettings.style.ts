import { styled } from "styled-components";

export const BrushSettingsWrapper = styled.article`
  margin: 1rem;
  background-color: #828282;
  position: relative;
  height: 30vh;
`;

export const BrushSettingsUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
`;

export const BrushSettingsLabel = styled.label`
  min-width: 75px;
  display: inline-block;
`;

export const BrushSettingsLi = styled.li`
  margin: 0 1.2rem 0 0;
`;

export const H2 = styled.h2`
  text-align: center;
`;

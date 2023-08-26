import { styled } from "styled-components";
import "./App.css";
import { Canvas } from "./components/canvas/Canvas";
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { BrushContextProvider } from "./components/context/BrushContext";

const MainPageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

function App() {
  return (
    <MainPageWrapper>
      <BrushContextProvider>
      <Canvas></Canvas>
      <ControlPanel></ControlPanel>
      </BrushContextProvider>
    </MainPageWrapper>
  );
}

export default App;

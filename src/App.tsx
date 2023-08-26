import { styled } from 'styled-components'
import './App.css'
import { Canvas } from './components/canvas/Canvas'
import { ControlPanel } from './components/control-panel/ControlPanel'

const MainPageWrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
margin: 0;
`;

function App() {
//main view
//2 coponents main canvas and controls
//paint wrapper pads in and looks like paper
  return (
    <MainPageWrapper>
 <Canvas></Canvas>
 <ControlPanel></ControlPanel>
 </MainPageWrapper>
  )
}

export default App

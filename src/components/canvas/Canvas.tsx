import { styled } from "styled-components";
import { DrawingArea } from "./DrawingArea";

const CanvasWrapper = styled.section`
flex: 80;
padding: 4rem;
`;

export const Canvas = () => {
    return (
        <CanvasWrapper>
            <DrawingArea></DrawingArea>
        </CanvasWrapper>
    ) 
}
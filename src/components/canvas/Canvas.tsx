import { styled } from "styled-components";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { DrawingArea } from "./DrawingArea.style";

const CanvasWrapper = styled.section`
flex: 80;
`;

export const Canvas = () => {
    const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
    const [canvasCTX, setCanvasCTX] = useState<CanvasRenderingContext2D | null>(null);
    const [color, setColor] = useState("#000000"); // Default color is black
    const [size, setSize] = useState(10); // Default size is 10
    const canvasRef = useRef(document.getElementById('canvas') as
    HTMLCanvasElement);

    // set position of the mouse
    const SetPos = (e: MouseEvent) => {
        setMouseData({
            x: e.clientX, // Mouse X position
            y: e.clientY, // Mouse Y position
        });
    };

    const Draw = (e: MouseEvent) => {
        if (e.buttons !== 1) return; 
        const ctx = canvasCTX; // Our saved context
        if (ctx) {
            ctx!.beginPath(); // Start the line
          
            setMouseData({
                x: e.clientX,
                y: e.clientY , // off set for margins
            });
            ctx!.moveTo(mouseData.x, mouseData.y * 0.8); // Move the line to the saved mouse location
            ctx!.lineTo(e.clientX, e.clientY * 0.8); // off set for margins

            ctx!.strokeStyle = color; // Set the color as the saved state
            ctx!.lineWidth = size; // Set the size to the saved state
            // Set the line cap to round
            ctx!.lineCap = "round";
            ctx!.stroke(); // Draw it!
        }
    
    };

    // Set the canvas ctx as the state
useEffect(() => {
    const canvas = canvasRef.current; 
        const ctx = canvas.getContext("2d"); 
        canvas.width = window.innerWidth * 0.8;  //this will need updating
        canvas.height = window.innerHeight * 0.8;
        setCanvasCTX(ctx); 
}, [canvasRef]); 

   return (
    <CanvasWrapper>
        <DrawingArea 
        ref={canvasRef} 
        onMouseEnter={(e: MouseEvent) => SetPos(e)}
onMouseMove={(e: MouseEvent) => {SetPos(e); Draw(e)}}
onMouseDown={(e: MouseEvent) => SetPos(e)}
/>
</CanvasWrapper>
   )

}
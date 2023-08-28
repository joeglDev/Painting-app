import { styled } from "styled-components";
import { MouseEvent, useContext, useEffect, useRef, useState } from "react";
import { DrawingArea } from "./DrawingArea.style";
import { BrushContext } from "../context/BrushContext";

const CanvasWrapper = styled.section`
  flex: 80;
`;

export const Canvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [canvasCTX, setCanvasCTX] = useState<CanvasRenderingContext2D | null>(
    null,
  );

  const canvasRef = useRef(
    document.getElementById("canvas") as HTMLCanvasElement,
  );

  const { colour, size } = useContext(BrushContext);

  const SetPos = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const Draw = (e: MouseEvent) => {
    if (e.buttons !== 1) return;
    const ctx = canvasCTX!;
    ctx!.beginPath(); // Start the line

    setMousePosition({
      x: e.clientX,
      y: e.clientY, // off set for margins
    });

    // Move the line to the saved mouse location with canvas offset
    ctx!.moveTo(mousePosition.x, mousePosition.y * 0.8);
    ctx!.lineTo(e.clientX, e.clientY * 0.8);

    //brush states
    ctx!.strokeStyle = colour;
    ctx!.lineWidth = size;
    ctx!.lineCap = "round";
    ctx!.stroke();
  };

  // Set the canvas ctx as the state
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    setCanvasCTX(ctx);
  }, [canvasRef]);

  return (
    <CanvasWrapper>
      <DrawingArea
        ref={canvasRef}
        onMouseEnter={(e: MouseEvent) => SetPos(e)}
        onMouseMove={(e: MouseEvent) => {
          SetPos(e);
          Draw(e);
        }}
        onMouseDown={(e: MouseEvent) => SetPos(e)}
      />
    </CanvasWrapper>
  );
};

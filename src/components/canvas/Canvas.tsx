import { styled } from "styled-components";
import { MouseEvent, useContext, useEffect, useRef, useState } from "react";
import { DrawingArea } from "./DrawingArea.style";
import { BrushContext } from "../context/BrushContext";

const CanvasWrapper = styled.section`
  flex: 80;
`;

export const Canvas = () => {

  const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
  const [canvasCTX, setCanvasCTX] = useState<CanvasRenderingContext2D | null>(
    null,
  );

  const canvasRef = useRef(
    document.getElementById("canvas") as HTMLCanvasElement,
  );

  const { colour, size, opacity } = useContext(BrushContext);

  var isDown = false;
const points = useRef<any[]>([]);
  
  
  function onMouseDown(event: MouseEvent) {
    var point = getCanvasPointOfMouseEvent(event);
      points.current.push(point); // store
      redrawAll(); // clearAll and redraw
      isDown = true; // make it last so we can grab the isStart below
  }
  
  function onMouseMove(event: MouseEvent) {
      if ( isDown !== false) {
          var point = getCanvasPointOfMouseEvent(event);
          points.current.push({x: event.clientX, y: event.clientY, isStart: !isDown}); // store
          redrawAll(); // clear all and redraw
      }
  }
  function redrawAll() {
    // clear all
    const ctx = canvasCTX!;
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  ctx.globalAlpha = opacity;
  ctx.lineWidth = size;
  ctx.strokeStyle = colour;
  ctx.lineJoin = 'round';

  ctx.beginPath();
  points.current.forEach(function(pt) {
    if(pt.isStart){
      ctx.stroke(); // draw previous
      ctx.beginPath(); // begin a new sub-path
    }
    ctx.lineTo(pt.x, pt.y * 0.8 ); // will moveTo automatically if needed
  });
  ctx.stroke();
  }
  
  function onMouseUp(e: MouseEvent) {
      isDown = false;
  }

  function getCanvasPointOfMouseEvent(event: MouseEvent) {

    var canvasX = (event.pageX);
    var canvasY = (event.pageY );

    return {x: canvasX, y: canvasY, isStart: !isDown};
}

  const SetPos = (e: MouseEvent) => {
    setMouseData({x: e.clientX, y: e.clientY})
  }


  // Set the canvas ctx as the state
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.8; //accounts for canvas width being 80% of screen width
    canvas.height = window.innerHeight * 0.8;
    setCanvasCTX(ctx);
  }, [canvasRef]);

  return (
    <CanvasWrapper>
      <DrawingArea
        ref={canvasRef}
       // onMouseEnter={(e: MouseEvent) => SetPos(e)}
        onMouseMove={(e: MouseEvent) => onMouseMove(e)}
        onMouseDown={(e: MouseEvent) =>  onMouseDown(e)}
        onMouseUp={(e: MouseEvent) => onMouseUp(e)}
      />
    </CanvasWrapper>
  );
};

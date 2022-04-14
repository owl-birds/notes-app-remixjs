// REACT
import { useState, useRef, useEffect } from "react";

// types
// import type { PointerEventHandler } from "react";

const NewCanvas = () => {
  // STATE
  const [isDrawing, setIsDrawing] = useState(false);
  // const [isPen, setIsPen] = useState(false);
  const [dataUrl, setDataUrl] = useState("");
  // REF
  const canvasRef = useRef<CanvasRenderingContext2D>(null);
  const contextRef = useRef(null);
  // USE EFFECT
  useEffect(() => {
    console.log("USE EFFECT");
    const canvas: any = canvasRef.current;
    canvas.width = 800 * 2;
    canvas.height = 350 * 2;
    canvas.style.width = `${800}px`;
    canvas.style.height = `${350}px`;

    const context: any = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    contextRef.current = context;
  }, []);
  const startDrawing = ({ nativeEvent, pointerType }) => {
    // // console.log(pointerType);
    // if (pointerType === "pen") {
    //   setIsPen(() => true);
    // }
    const { offsetX, offsetY } = nativeEvent;
    contextRef?.current.beginPath();
    contextRef?.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    setIsDrawing(() => true);
  };
  const endDrawing = () => {
    contextRef?.current.closePath();
    setIsDrawing(() => false);
    const tempDataUrl = canvasRef?.current?.toDataURL();
    setDataUrl(() => tempDataUrl);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  // const saveDrawing = () => {
  //   // console.log(dataUrl);
  // };
  return (
    <div className="canvas-wrapper">
      <div className="canvas-header">
        <h4>New Canvas</h4>
      </div>
      <div className="canvas-box">
        <canvas
          // onMouseDown={startDrawing}
          // onMouseUp={endDrawing}
          // onMouseMove={draw}
          onPointerDown={startDrawing}
          onPointerUp={endDrawing}
          onPointerMoveCapture={draw}
          ref={canvasRef}
          className="canvas"
        ></canvas>
      </div>
      <form method="post">
        <input type="hidden" value={dataUrl} name="_addCanvas" />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NewCanvas;

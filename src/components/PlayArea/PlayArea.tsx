import React, { useState, useEffect } from "react";

const PlayArea = () => {
  const [MouseX, setMouseX] = useState(0);
  const [MouseY, setMouseY] = useState(0);

  useEffect(() => {
    const event = (e: MouseEvent) => {
      setMouseY(e.clientY - 50);
      setMouseX(e.clientX - 50);
    };
    document.addEventListener("click", event);
    return () => document.removeEventListener("click", event);
  });

  useEffect(() => {
    const eventkd = (k: KeyboardEvent) => {
      console.log(k)
      if (k.key === "ArrowDown") {
        setMouseY(MouseY + 50);
      }
      if (k.key === "ArrowUp") {
        setMouseY(MouseY - 50);
      }
      if (k.key === "ArrowRight") {
        setMouseX(MouseX + 50);
      }
      if (k.key === "ArrowLeft") {
        setMouseX(MouseX - 50);
      }
      if (k.key === "r") {
        setMouseX(0);
        setMouseY(0);
      }
    };
    document.addEventListener("keydown", eventkd);
    return () => document.removeEventListener("keydown", eventkd);
  });

  return (
    <>
      <div
        className="ball"
        style={{
          top: MouseY === 0 ? "inherit" : `${MouseY}px`,
          left: MouseX === 0 ? "inherit" : `${MouseX}px`,
        }}
      ></div>
    </>
  );
};

export default PlayArea;

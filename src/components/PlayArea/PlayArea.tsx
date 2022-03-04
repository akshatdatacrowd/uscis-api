import React, { useState, useEffect } from "react";

const PlayArea = () => {
  const [Mouse, setMouse] = useState({ top: "inherit", left: "inherit" });

  useEffect(() => {
    const event = (e: MouseEvent) => {
      setMouse({ top: `${e.clientY - 50}px`, left: `${e.clientX - 50}px` });
    };
    document.addEventListener("click", event);
    return () => document.removeEventListener("click", event);
  });
  return (
    <>
      <div
        className="ball"
        style={{ top: Mouse?.top, left: Mouse?.left }}
      ></div>
    </>
  );
};

export default PlayArea;

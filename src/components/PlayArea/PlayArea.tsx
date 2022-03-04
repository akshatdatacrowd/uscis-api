import { useState } from "react";

const PlayArea = () => {
    const [Mouse, setMouse] = useState({top: 'inherit', left: 'inherit'})
  document.addEventListener("click", function(e){
    setMouse({top: `${e.clientY - 50}px`, left: `${e.clientX - 50}px`})
    
  });
  return (
    <>
       <div className="ball" style={{ top: `${Mouse['top']}`, left: `${Mouse['left']}` }}></div>
    </>
  );
};

export default PlayArea;

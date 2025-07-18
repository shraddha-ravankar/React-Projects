import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black"); // initial color

  return (
    <div 
      className="w-full h-screen duration-200" 
      style={{ backgroundColor: color }}  // using state
    >
      <div className=" fixed flex flex-wrap justify-center  bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}

           className="outline-None rounded-full px-4 shadow-sm "  style={{ backgroundColor: "red", color: "white" }} 
         >
            red</button>
          <button
          onClick={() => setColor("blue")}

          className="outline-None rounded-full px-4 shadow-sm" style={{ backgroundColor: "blue", color: "white" }} 
         >
            Blue</button>
          <button 
          onClick={() => setColor("green")}

          className="outline-None rounded-full px-4 shadow-sm" style={{ backgroundColor: "green", color: "white" }} 
         >
            green</button>
          <button 
          onClick={() => setColor("orange")}

          className="outline-None rounded-full px-4 shadow-sm" style={{ backgroundColor: "Orange", color: "white" }} 
         >
            Orange</button>
          <button 
          onClick={() => setColor("yellow")}

          className="outline-None rounded-full px-4 shadow-sm" style={{ backgroundColor: "yellow", color: "white" }} 
         >
            Yellow</button>
          <button
          onClick={() => setColor("pink")}

           className="outline-None rounded-full px-4 shadow-sm" style={{ backgroundColor: "pink", color: "white" }} 
         >
            Pink</button>
          <button
          onClick={() => setColor("violet")}

           className="outline-None rounded-full px-4 shadow-sm" style={{ backgroundColor: "red", color: "voilate" }} 
         >
            voilate</button>

        </div>
       
      </div>
    </div>
  );
}

export default App;




    

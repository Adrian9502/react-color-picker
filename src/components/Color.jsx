import React, { useState } from "react";
import "./Color.css";

const Color = () => {
  const [color, setColor] = useState("#121212");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div className="color-picker-container">
        <h1 className="text-dark">Color Picker in ReactJS</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color : {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
};

export default Color;

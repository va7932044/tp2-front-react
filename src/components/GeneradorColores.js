import React, { useState } from 'react';

const GeneradorColores = () => {
  const [color, setColor] = useState('#ffffff');

  const generarColor = () => {
    const nuevoColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(nuevoColor);
  };

  return (
    <div>
      <div style={{ width: '250px', height: '200px', backgroundColor: color }}></div>
      <button onClick={generarColor}>Cambiar Color</button>
    </div>
  );
};

export default GeneradorColores;

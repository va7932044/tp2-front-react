import React, { useState } from 'react';

const Adivinanza = () => {
  const [numero,] = useState(Math.floor(Math.random() * 50) + 1);
  const [adivinanza, setAdivinanza] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (event) => {
    setAdivinanza(event.target.value);
  };

  const comprobarAdivinanza = () => {
    const numAdivinado = parseInt(adivinanza);
    if (numAdivinado === numero) {
      setMensaje('¡Correcto!');
    } else if (numAdivinado < numero) {
      setMensaje('El número es mayor');
    } else {
      setMensaje('El número es menor');
    }
  };

  return (
    <div>
      <p>Intenta adivinar el número (entre 1 y 50):</p>
      <input type="number" value={adivinanza} onChange={manejarCambio} />
      <button onClick={comprobarAdivinanza}>Comprobar</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default Adivinanza;

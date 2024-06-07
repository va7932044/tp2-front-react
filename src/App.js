
import React from 'react';
import TarjetaPresentacion from './components/TarjetaPresentacion';
import Contador from './components/Contador';
import GeneradorColores from './components/GeneradorColores';
import EmojiAleatorio from './components/EmojiAleatorio';
import Adivinanza from './components/Adivinanza';

const App = () => {
  return (
    <div style={{ border: '5px solid #ccc', padding: '100px', width: '250px', borderRadius: '40px', textAlign: 'center'}}>
      <TarjetaPresentacion 
        nombre="Viviana" 
        apellido="Avila" 
        profesion="Desarrolladora" 
        descripcion="Los desarrolladores nos encargamos de crear aplicaciones y comprender las necesidades de los usuarios." 
      />
       <Contador />
       <GeneradorColores />
       <EmojiAleatorio/>
       <Adivinanza/>
  
    </div>
  );
};

export default App;






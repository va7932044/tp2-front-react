import React from 'react';

const TarjetaPresentacion = (props) => {
  return (
    <div>
      <h2>{props.nombre} {props.apellido}</h2>
      <h4>{props.profesion}</h4>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default TarjetaPresentacion;

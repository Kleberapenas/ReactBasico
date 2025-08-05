import React, { useState } from 'react';

const BotaoToggle = () => {
  const [ligado, setLigado] = useState(true);

  const alternarEstado = () => {
    setLigado((estadoAnterior) => !estadoAnterior);
  };

  const estiloBotao = {
    backgroundColor: ligado ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <button onClick={alternarEstado} style={estiloBotao}>
      {ligado ? 'ON' : 'OFF'}
    </button>
  );
};

export default BotaoToggle;

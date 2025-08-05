import React, { useState } from 'react';

const ListaDeFrutas = () => {
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Uva']);

  const adicionarFruta = () => {
    setFrutas([...frutas, 'Morango']);
  };

  return (
    <div>
        <h1>5. ex</h1>
      <h2>Lista de Frutas</h2>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
      <button onClick={adicionarFruta} style={{ padding: '8px 16px', fontSize: '16px' }}>
        Adicionar Fruta
      </button>
    </div>
  );
};

export default ListaDeFrutas;

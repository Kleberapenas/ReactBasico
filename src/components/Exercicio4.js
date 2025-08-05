import React, { useState } from 'react';

const InputTexto = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
        <h2>4. ex</h2>
      <input
        type="text"
        placeholder="Digite algo..."
        value={texto}
        onChange={handleChange}
        style={{ padding: '8px', fontSize: '16px', width: '300px' }}
      />
      <p style={{ marginTop: '10px', fontSize: '18px' }}>
        Você digitou: {texto}
      </p>
    </div>
  );
};

export default InputTexto;

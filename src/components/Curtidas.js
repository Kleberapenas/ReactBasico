import React, { useState } from 'react';

function Curtidas() {
        const [contador, setContador] = useState(0);
        
        const incrementar = () => {
            setContador(contador + 1);
        };
        
    return (
            <div className="contador">
              <h2>Curtidas: {contador}</h2>
              <button onClick={incrementar}>+</button>
            </div>
          );
}

export default Curtidas;
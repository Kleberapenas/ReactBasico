import React from 'react';

import CardInfo from './components/CardInfo';
import Curtidas from './components/Curtidas';
import BotaoToggle from './components/Toggle';
import InputText from './components/Exercicio4';
import ListaDeFrutas from './components/Exercicio5';

function App() {
  return (
    <div className="App">
      <CardInfo />
      <Curtidas />
      <BotaoToggle />
      <InputText />
      <ListaDeFrutas />
    </div>
  );
}

export default App;


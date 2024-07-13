import React from 'react';
import PagaRecibo from './components/PagaRecibo';
import ReciboDigital from './components/ReciboDigital';
import GenerarReporte from './components/GenerarReporte';
import Mapa from './components/Mapa';
import ChatMiaa from './components/ChatMiaa';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MiaaSmart</h1>
      </header>
      <main>
        <div className="buttons-container">
          <PagaRecibo />
          <ReciboDigital />
          <GenerarReporte />
          <Mapa />
        </div>
        <ChatMiaa />
      </main>
    </div>
  );
}

export default App;
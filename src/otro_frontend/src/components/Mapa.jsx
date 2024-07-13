import React from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as miaaSmartIdl } from '../../../declarations/miaasmart_backend';

const agent = new HttpAgent();
const miaaSmart = Actor.createActor(miaaSmartIdl, {
  agent,
  canisterId: 'your-canister-id',
});

const Mapa = () => {
  const handleMapa = async () => {
    try {
      const result = await miaaSmart.mostrarMapa();
      console.log('Mapa mostrado:', result);
    } catch (error) {
      console.error('Error al mostrar mapa:', error);
    }
  };

  return (
    <button onClick={handleMapa} className="app-button">
      Mapa
    </button>
  );
};

export default Mapa;
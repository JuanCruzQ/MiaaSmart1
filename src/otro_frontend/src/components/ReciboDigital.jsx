import React from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as miaaSmartIdl } from '../../../declarations/miaasmart_backend';

const agent = new HttpAgent();
const miaaSmart = Actor.createActor(miaaSmartIdl, {
  agent,
  canisterId: 'your-canister-id',
});

const ReciboDigital = () => {
  const handleReciboDigital = async () => {
    try {
      const result = await miaaSmart.recibeReciboDigital();
      console.log('Recibo digital:', result);
    } catch (error) {
      console.error('Error al recibir recibo digital:', error);
    }
  };

  return (
    <button onClick={handleReciboDigital} className="app-button">
      Recibo Digital
    </button>
  );
};

export default ReciboDigital;
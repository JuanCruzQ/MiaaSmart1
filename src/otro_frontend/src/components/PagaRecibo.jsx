import React from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as miaaSmartIdl } from '../../../declarations/miaasmart_backend';

const agent = new HttpAgent();
const miaaSmart = Actor.createActor(miaaSmartIdl, {
  agent,
  canisterId: 'your-canister-id',
});

const PagaRecibo = () => {
  const handlePagoRecibo = async () => {
    try {
      const result = await miaaSmart.pagaRecibo();
      console.log('Recibo pagado:', result);
    } catch (error) {
      console.error('Error al pagar recibo:', error);
    }
  };

  return (
    <button onClick={handlePagoRecibo} className="app-button">
      Paga tu recibo
    </button>
  );
};

export default PagaRecibo;
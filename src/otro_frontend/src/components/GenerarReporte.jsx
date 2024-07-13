import React from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as miaaSmartIdl } from '../../../declarations/miaasmart_backend';

const agent = new HttpAgent();
const miaaSmart = Actor.createActor(miaaSmartIdl, {
  agent,
  canisterId: 'your-canister-id',
});

const GenerarReporte = () => {
  const handleGenerarReporte = async () => {
    try {
      const result = await miaaSmart.generarReporte();
      console.log('Reporte generado:', result);
    } catch (error) {
      console.error('Error al generar reporte:', error);
    }
  };

  return (
    <button onClick={handleGenerarReporte} className="app-button">
      Generar Reporte
    </button>
  );
};

export default GenerarReporte;
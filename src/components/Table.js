import React from 'react';
import './Table.css'; // Certifique-se de que o CSS está importado

const apartamentos = [
    { tipo: 'Solteiro/Simples', diaria: 'R$ 129,00' },
    { tipo: 'Casal/Duplo', diaria: 'R$ 185,00' },
    { tipo: 'Duplo/Simples', diaria: 'R$ 160,00' },
    { tipo: 'Triplo', diaria: 'R$ 230,00' },
    { tipo: 'Quadruplo', diaria: 'R$ 294,00' },
  ];

  const suites = [
    { tipo: '01 pessoa', diaria: 'R$ 150,00' },
    { tipo: '02 pessoas', diaria: 'R$ 185,00' },
  ];

function TarifaTable() {
 
  
  return (
    <div className="table-container">
      <div className="table-responsive">
        <h2>APARTAMENTOS</h2>
        <hr></hr>
        <table className="table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Diária</th>
            </tr>
          </thead>
          <tbody>
            {apartamentos.map((apartamento, index) => (
              <tr key={index}>
                <td>{apartamento.tipo}</td>
                <td>{apartamento.diaria}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>SUÍTES</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Diária</th>
            </tr>
          </thead>
          <tbody>
            {suites.map((suite, index) => (
              <tr key={index}>
                <td>{suite.tipo}</td>
                <td>{suite.diaria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TarifaTable;

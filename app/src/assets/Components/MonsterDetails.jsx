import React from 'react';

const MonsterDetails = ({ monsterDetails, error }) => {
  return (
    <div className="search-result">
      {error && <p>{error}</p>}
      {monsterDetails && (
        <ul>
          <li>Nome: {monsterDetails.name}</li>
          <li>Tipo: {monsterDetails.type}</li>
          <li>Tamanho: {monsterDetails.size}</li>
          <li>Idioma: {monsterDetails.languages}</li>
          <li>Alinhamento: {monsterDetails.alignment}</li>
        </ul>
      )}
    </div>
  );
};

export default MonsterDetails;
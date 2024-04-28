import React from 'react';
import "./MonsterDetails.css";

import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';

const MonsterDetails = ({ monsterDetails, error }) => {
  return (
    <div className="search-result">
      {error && <p>{error}</p>}
      {monsterDetails && (
        <ul className='monster_details_list'>
          <li className='monster_details_line'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{monsterDetails.name}</Card.Title>
                    <Card.Text>Tipo: {monsterDetails.type}</Card.Text>
                    <CardText>Tamanho: {monsterDetails.size}</CardText>
                    <CardText>Idioma: {monsterDetails.languages}</CardText>
                    <CardText>Alinhamento: {monsterDetails.alignment}</CardText>
                </Card.Body>
            </Card>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MonsterDetails;
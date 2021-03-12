import React from 'react';

import ItemList from './ItemList';

const Componente = props => {
  return (
    <ul>
      {props.data.map( (item) => <ItemList item={item}/> )}
    </ul>
  );
};

export default Componente;

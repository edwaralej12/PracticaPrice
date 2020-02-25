import React from 'react';
import Content from './Content';
import Prices from './Prices';

const Main = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      
      <Content />
      <Prices />

    </>
  );

}


export default Main;
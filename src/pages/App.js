import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/main';
import Content from '../components/Content';
import Prices from '../components/Prices';

//JSX >> Se combina codigo js con html
//Hay componentes que se comportan como contenedores o como contenidos

// function App1() {//componente stateful (cambia de estado)
//   return ( // siempre se retorna un unico componente contenedor
//     <div >
//       <h1>Componente App1</h1>
//     </div>
//   );
// }

// const App2 = () => {//funcion flecha
//   return ( // siempre se retorna un unico componente contenedor
//     <div >
//       <h1>Componente App2</h1>
//     </div>
//   );
// }

// const App3 = () => (//deja de ser un componente stateful no contiene {}
//   // siempre se retorna un unico componente contenedor
//     <div >
//       <h1>Componente App3</h1>
//     </div>
// )
const App = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      <Header />
      <Main />
      <Content />
      <Prices />
      <Footer />
    </>
  );

}
       
// export default App1;
// export default App2;
// export default App3;
export default App;
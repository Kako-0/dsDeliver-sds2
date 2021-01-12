import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import Routers from './Routers';

function App() {
  return (
    <>
    {/* Utilizando a biblioteca padrão do React para fazer o roteamento das páginas*/}
      <Routers/>
      {/* Utilizando a biblioteca Toastify para mostrar mensagens de erro e confirmação do envio de pedidos*/}
      <ToastContainer/>
    </>
  );
}

export default App;

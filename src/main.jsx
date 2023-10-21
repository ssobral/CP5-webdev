import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import EditarPedido from './routes/EditarPedido.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Error from './routes/Error.jsx';
import ExcluirPedido from './routes/ExcluirPedido.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import Home from './routes/Home.jsx';
import InserirPedido from './routes/InserirPedido.jsx';
import InserirProduto from './routes/InserirProduto.jsx';
import Login from './routes/Login.jsx';
import Pedido from './routes/Pedido.jsx';
import Produtos from './routes/Produtos.jsx';
import Sobre from './routes/Sobre.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home />},
      { path: '/login', element: <Login />},
      { path: '/editar/pedido/:id', element: <EditarPedido />},
      { path: '/editar/produto/:id', element: <EditarProduto />},
      { path: '/excluir/pedido/:id', element: <ExcluirPedido />},
      { path: '/excluir/produto/:id', element: <ExcluirProduto />},
      { path: '/cadastrar/pedido', element: <InserirPedido />},
      { path: '/cadastrar/produto', element: <InserirProduto />},
      { path: '/pedido', element: <Pedido />},
      { path: '/produtos', element: <Produtos />},
      { path: '/sobre', element: <Sobre />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);



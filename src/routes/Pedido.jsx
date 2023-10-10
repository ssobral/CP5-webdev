import { } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import { ListaPedido } from '../components/ListaPedido';


function Pedido() {
  return (
    <section>
      <h1>Seu pedido:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Editar / Excluir</th>
          </tr>
        </thead>
        <tbody>
          {ListaPedido.map((item, indice) => (
            <tr key={indice}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.valor}</td>
              <td>
                <Link to={`/editar/pedido/${item.id}`}>
                  <Editar />
                </Link>{' '}
                <Link to={`/excluir/pedido/${item.id}`}>
                  <Excluir />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/cadastrar/pedido"><button>Cadastrar Pedido</button></Link>
    </section>
  )
}
export default Pedido
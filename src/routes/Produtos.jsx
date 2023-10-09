import { } from 'react';
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';


function Produtos() {
  return (
    <section >
      <h1>Produtos:</h1>
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
          {ListaProdutos.map((item, indice) => (
            <tr key={indice}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.valor}</td>
              <td>
                <Link to={`/editar/produto/${item.id}`}>
                  <Editar />
                </Link>{' '}
                <Link to={`/excluir/produto/${item.id}`}>
                  <Excluir />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/cadastrar/produto"><button>Cadastrar Produto</button></Link>
    </section>
  );
}

export default Produtos
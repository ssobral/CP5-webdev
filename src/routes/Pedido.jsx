import { } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import { ListaPedido } from '../components/ListaPedido';
import styles from './styles/estilo.module.css';


function Pedido() {
  return (
    <section className={styles.produtos}>
      <h1 className={styles.titulo_produtos}>Seu pedido:</h1>
      <table className={styles.tabela}>
        <thead>
          <tr className={styles.itens}>
            <th className={styles.titulo_tabela}>ID</th>
            <th className={styles.titulo_tabela}>Nome</th>
            <th className={styles.titulo_tabela}>Preço</th>
            <th className={styles.titulo_tabela}>Editar / Excluir</th>
          </tr>
        </thead>
        <tbody>
          {ListaPedido.map((item, indice) => (
            <tr key={indice} className={styles.itens}>
              <td className={styles.item_tabela}>{item.id}</td>
              <td className={styles.item_tabela}>{item.nome}</td>
              <td className={styles.item_tabela}>{item.valor}</td>
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
      <Link to="/cadastrar/pedido" className={styles.button_cadastro}><button className={styles.button}>Cadastrar Pedido</button></Link>
    </section>
  )
}
export default Pedido
import { } from 'react';
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import styles from './styles/estilo.module.css';


function Produtos() {
  return (
    <section className={styles.produtos}>
      <h1 className={styles.titulo_produtos}>Produtos:</h1>
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
          {ListaProdutos.map((item, indice) => (
            <tr key={indice} className={styles.itens}>
              <td className={styles.item_tabela}>{item.id}</td>
              <td className={styles.item_tabela}>{item.nome}</td>
              <td className={styles.item_tabela}>{item.valor}</td>
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
      <Link to="/cadastrar/produto" className={styles.button_cadastro}><button className={styles.button}>Cadastrar Produto</button></Link>
    </section>
  );
}

export default Produtos
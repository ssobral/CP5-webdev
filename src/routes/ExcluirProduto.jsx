import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import styles from './styles/estilo.module.css';


function ExcluirProduto (){

  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  const [produto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    valor: recProdutoListaById[0].valor,
  });

  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1);
    navigate('/produtos');
  };

  return(
    <section className={styles.excluir}>
      <h1 className={styles.excluir_titulo}>Excluir Produto</h1>
      <div>
        <p className={styles.excluir_item}><strong className={styles.excluir_item_destaque}>Nome :</strong> {produto.nome}</p>
        <p className={styles.excluir_item}><strong className={styles.excluir_item_destaque}>Valor :</strong> {produto.valor}</p>
      </div>
      <div className={styles.excluir_buttons}>
        <button onClick={handleExclude} className={styles.excluir_button}>EXCLUIR</button>
        <button onClick={() => navigate('/produtos')} className={styles.excluir_button}>CANCELAR</button>
      </div>
    </section>
  )
}
export default ExcluirProduto
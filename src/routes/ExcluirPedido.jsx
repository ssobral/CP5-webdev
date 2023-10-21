import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedido } from '../components/ListaPedido';
import styles from './styles/estilo.module.css';


function ExcluirPedido (){

  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaPedido.filter((item) => item.id == id);

  const [produto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    valor: recProdutoListaById[0].valor,
  });

  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaPedido.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaPedido.splice(indice, 1);
    navigate('/pedido');
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
        <button onClick={() => navigate('/pedido')} className={styles.excluir_button}>CANCELAR</button>
      </div>
    </section>
  )
}
export default ExcluirPedido
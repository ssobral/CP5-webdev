import { useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { ListaPedido } from '../components/ListaPedido'
import styles from './styles/estilo.module.css';


function EditarPedido (){
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recProdutoListaById = ListaPedido.filter((item) => item.id == id);

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    valor: recProdutoListaById[0].valor,
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaPedido.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    
    ListaPedido.splice(indice, 1, produto);
    navigate('/pedido');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };


  return(
    <section className={styles.editar}>
        <h1 className={styles.titulo_editar}>Editar Pedido:</h1>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.titulo_form}>Produto selecionado:</h2>
          <div>
            <input type='hidden' name='id' value={produto.id} onChange={handleChange}></input>
          </div>
          <div className={styles.item_form}>
            <label htmlFor='idNome' className={styles.editar_form_item}>Nome do Produto:</label>
            <input type='text' name='nome' id='idNome' value={produto.nome} onChange={handleChange}></input>
          </div>
          <div className={styles.item_form}>
            <label htmlFor='idValor' className={styles.editar_form_item}>Valor do Produto:</label>
            <input type='text' name='valor' id='idValor' value={produto.valor} onChange={handleChange}></input>
            <button type='submit' className={styles.button_editar}>Editar</button>
          </div>
          
        </form>
    </section>
  )
}


export default EditarPedido
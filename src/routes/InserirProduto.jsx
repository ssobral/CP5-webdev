import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import styles from './styles/estilo.module.css';


function InserirProduto (){

  const navigate = useNavigate();

  let newId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  const [produto, setProduto] = useState({
    id: newId,
    nome: '',
    valor: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return(
    <section className={styles.editar}>
        <h1 className={styles.titulo_editar}>Cadasto de Produto:</h1>
          <form onSubmit={handleSubmit}>
            <h2 className={styles.titulo_form}>Produto:</h2>
            <div className={styles.item_form}>
              <label htmlFor='idNome' className={styles.editar_form_item}>Nome do produto:</label>
              <input type='text' name='nome' id='idNome' value={produto.nome} onChange={handleChange}></input>
            </div>
            <div className={styles.item_form}>
              <label htmlFor='idValor' className={styles.editar_form_item}>Valor do produto:</label>
              <input type='text' name='valor' id='idValor' value={produto.value} onChange={handleChange}></input>
              <button type='submit' className={styles.button_editar}>Cadastrar</button>
            </div>
            
        </form>
    </section>
  )
}
export default InserirProduto
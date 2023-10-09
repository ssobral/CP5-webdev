import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';


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
    <section >
        <h1>Cadasto de Produto:</h1>
          <form onSubmit={handleSubmit}>
            <h2>Produto:</h2>
            <div>
              <label htmlFor='idNome'>Nome do produto:</label>
              <input type='text' name='nome' id='idNome' value={produto.nome} onChange={handleChange}></input>
            </div>
            <div>
              <label htmlFor='idValor'>Valor do produto:</label>
              <input type='text' name='valor' id='idValor' value={produto.value} onChange={handleChange}></input>
            </div>
            <button type='submit'>Cadastrar</button>
        </form>
    </section>
  )
}
export default InserirProduto
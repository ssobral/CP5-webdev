import { useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos'


function EditarProduto (){
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    valor: recProdutoListaById[0].valor,
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    
    ListaProdutos.splice(indice, 1, produto);
    navigate('/produtos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };


  return(
    <section >
        <h1>Editar Produto</h1>
        <form onSubmit={handleSubmit}>
          <h2>Produto selecionado:</h2>
          <div>
            <input type='hidden' name='id' value={produto.id} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='idNome'>Nome do Produto:</label>
            <input type='text' name='nome' id='idNome' value={produto.nome} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='idValor'>Valor do Produto:</label>
            <input type='text' name='valor' id='idValor' value={produto.valor} onChange={handleChange}></input>
          </div>
          <button type='submit'>Editar</button>
        </form>
    </section>
  )
}


export default EditarProduto
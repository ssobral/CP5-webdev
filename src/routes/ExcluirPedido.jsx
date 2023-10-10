import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedido } from '../components/ListaPedido';


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
    <section>
      <h1>Excluir Produto</h1>
      <div>
        <p>Nome : {produto.nome}</p>
        <p>valor : {produto.valor}</p>
      </div>
      <div>
        <button onClick={handleExclude}>EXCLUIR</button>
        <button onClick={() => navigate('/pedido')}>CANCELAR</button>
      </div>
    </section>
  )
}
export default ExcluirPedido
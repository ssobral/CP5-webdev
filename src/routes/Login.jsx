import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Pedido from './Pedido';



function Login() {

  const navigate = useNavigate();
  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem('usuario');
  const getSenha = sessionStorage.getItem('senha');

  const handleSubmit = () => {
    if (user.current.value === 'adm' && password.current.value === 'wada') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('usuario', 'adm');
      sessionStorage.setItem('senha', token);
      navigate('/pedido');
    } else {
      alert('Dados inválidos.');
    }
  };
  return (
    <section>
      <h1>Login</h1>
      {getUser && getSenha ? (
        <Pedido />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Usuário:</h2>
            <input type="text" ref={user}/>
          </div>
          <div>
            <h2>Senha:</h2>
            <input type="password" ref={password}/>
          </div>
          <input type="submit" value="Login" />
        </form>
      )}
    </section>
  );
}
export default Login
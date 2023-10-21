import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Pedido from './Pedido';
import styles from './styles/estilo.module.css';



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
    <section className={styles.login}>
      <h1 className={styles.login_titulo}>Login</h1>
      {getUser && getSenha ? (
        <Pedido />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.item_form}>
            <h2 className={styles.editar_form_item}>Usuário:</h2>
            <input type="text" ref={user}/>
          </div>
          <div className={styles.item_form}>
            <h2 className={styles.editar_form_item}>Senha:</h2>
            <input type="password" ref={password}/>
            <input className={styles.button_editar} type="submit" value="Login" />
          </div>
          
        </form>
      )}
    </section>
  );
}
export default Login
import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styles from '../components/nav.module.css'

function Nav(){
    const navigate = useNavigate();

    const handleLogout = async() =>{
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');
        alert('Sua sessão foi finalizada.')
        navigate('/')
    }

    return(
        <>
            <header className={styles.menu}>
                <h2 className={styles.titulo}>Kioto</h2>
                <nav className={styles.menunav}>
                    <ul className={styles.nav}>
                        <li><Link to="/" className={styles.tlink}>Home</Link></li>
                        <li><Link to="produtos" className={styles.tlink}>Produtos</Link></li>
                        <li><Link to="sobre" className={styles.tlink}>Sobre nós</Link></li>
                        <li><Link to="login" className={styles.tlink}>Login</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav
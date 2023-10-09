import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';

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
            <header>
                <h2>Projeto Web</h2>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="produtos">Produtos</Link></li>
                        <li><Link to="sobre">Sobre nós</Link></li>
                        <li><Link to="login">Login</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav
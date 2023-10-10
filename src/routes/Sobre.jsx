import {} from 'react';
import Styles from './estilo.module.css';
import eclipse from '../assets/eclipse.webp';



function Sobre(){
  return(
    <section>
        <h1>Sobre nós</h1>
        <img src={eclipse} alt='carros' className={Styles.sobreImage}></img>
        <p>Integrantes:</p>
        <ul>
          <li>Anna Soto RM550360</li>
          <li>Danilo Urze RM99465</li>
          <li>Lucas Sobral RM98188</li>
          <li>Murilo Mansano RM98143</li>
          <li>Pedro Ananias RM550689</li>
        </ul>
    </section>
  )
}

export default Sobre
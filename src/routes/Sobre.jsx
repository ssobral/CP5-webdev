import { } from 'react';
import styles from './styles/estilo.module.css';
import comidajaponesa1 from '../assets/comidajaponesa1.webp';



function Sobre() {
  return (
    <section className={styles.sobre}>
      <h1 className={styles.titulo_sobre}>Sobre nós</h1>
      <img src={comidajaponesa1} alt='carros' className={styles.sobreImage}></img>
      <div>
        <p className={styles.lista}>Integrantes:</p>
        <ul className={styles.lista}>
          <li>Anna Soto RM550360</li>
          <li>Danilo Urze RM99465</li>
          <li>Lucas Sobral RM98188</li>
          <li>Murilo Mansano RM98143</li>
          <li>Pedro Ananias RM550689</li>
        </ul>
      </div>

    </section>
  )
}

export default Sobre
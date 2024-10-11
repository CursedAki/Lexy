import React from 'react';
import styles from "./Home.module.css";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.titleContainer}>
        <h1>
          <b>Confia en la justicia:</b> 
          <b>Soluciones Legales con Innovacion</b>
            <br></br>
        </h1>
          <h2>
          Nuestro equipo de expertos y un avanzado chatbot <br/>
          están aqui para ayudarte en cada paso.
          </h2>   
        
      </div>
      
      <div className={styles.btnContainer}>
        <Link to="Contact" 
          smooth
          duration={500} 
          className={styles.callToAction}
          > 
          chatbot
        </Link>
      </div>

    </div>
  )
}

export default Home
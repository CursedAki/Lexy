import React from 'react'
import styles from "./Services.module.css"; 


const Services = () => {
  return (
    (<div className={styles.services}>
      <p>
        Nuestros Servicios
      </p>
      <div>
        <img className={styles.webImage} src={require("../Assets/ImgServicios.jpg")} alt=''/>
        <img className={styles.webImage} src={require("../Assets/ImgServicios2.jpg")} alt=''/>
        <img className={styles.webImage} src={require("../Assets/ImgServicios3.jpg")} alt=''/>
        <img className={styles.webImage} src={require("../Assets/ImgServicios4.jpg")} alt=''/>


      </div>
      
    </div>)
  )
}

export default Services
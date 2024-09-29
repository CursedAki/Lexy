import React from 'react'
import styles from '../../src/Screens/HowWeWork.module.css';


// const HowWeWork = () => {
//   return (
//     <div>Nosotros</div>
//   )
// }


const HowWeWork = () => {
  const members = [
    {
      name: "Nombre Generico",
      description: "Especialista en derecho corporativo, Pato Pérez es conocido por su atención al detalle y su habilidad para resolver conflictos con precisión.",
      image: require('../Assets/Miembro1.jpg')
    },
    {
      name: "Nombre Generico",
      description: "Con un enfoque en derecho laboral, Pato González defiende los derechos de los empleados con una destreza negociadora sobresaliente.",
      image: require('../Assets/Miembro2.jpg')
    },
    {
      name: "Nombre Generico",
      description: "Capibara López aporta un enfoque sereno al derecho civil, combinando calma y experiencia para una defensa legal sólida y eficaz.",
      image: require('../Assets/Miembro3.jpg')
    }
  ];

  return (
    <div className={styles.howWeWork}>
      <h1>Nuestro equipo</h1>
      <div className={styles.team}>
        {members.map((member, index) => (
          <div className={styles.members} key={index}>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;

import React, { useState } from 'react'
import { Link } from "react-scroll";
import styles from  './Navbar.module.css';
import { CiMenuFries } from "react-icons/ci";
// import { RiCloseLargeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const[NavbarOpen, setNavbarOpen] = useState(false)
  const links = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: 'Servicios',
    },
    {
      id: 3,
      link: 'Nosotros',
    },
    {
      id: 4,
      link: 'Beneficios',
    },
    {
      id: 5,
      link: 'Contacto',
    },
    
  ];
  return (
    <div className={!NavbarOpen ? styles.Navbar : styles.navOpen}>
      {!NavbarOpen && <p className={styles.logo}> LEXY | Abogacia Digital </p>}  
      {!NavbarOpen ? (
        // Este es el que abre
        <CiMenuFries onClick={() => setNavbarOpen(!NavbarOpen)} 
        size={30}/>
      ) : (
      // Este cierra 
        <IoCloseOutline  
          onClick={() => setNavbarOpen(!NavbarOpen)}
          color='#f1f1f1'
          size={25}
        />
      )}
     {NavbarOpen && (
      <ul>
      {links.map((x) => (
        <div>
          <Link 
          onClick={() => setNavbarOpen(false)}
          to={x.link}
          smooth
          duration={500}
          className={styles.navLink}
          >
            {x.link === "HowWeWork" ? "How We Work" : x.link} 
          </Link>
          <div className={styles.border}></div>
        </div>
      ))}
    </ul>
     )}
  </div>
  );
};

export default Navbar
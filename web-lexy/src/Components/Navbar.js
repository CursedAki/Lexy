import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import styles from  './Navbar.module.css';
import { CiMenuFries } from "react-icons/ci";
// import { RiCloseLargeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useScrollPosition } from '../Hooks/scrollPosition';

const Navbar = () => {
  const[NavbarOpen, setNavbarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

// Agarra el UseState de arriba, y setea la dimension de la pantalla
  const detectDimension = () => {
    setWindowDimension(
      {width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', detectDimension)
    window.width > 800 && setNavbarOpen(false)
    return () =>{
    window.removeEventListener('resize', detectDimension)

    }
  },[windowDimension])

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

    
  ];
  const scrollPosition = useScrollPosition();

  return (
    <div className = {NavbarOpen ? styles.NavOpen : scrollPosition > 0 ? styles.navOnScroll : styles.Navbar} >
    {!NavbarOpen && <p className={styles.logo}> LEXY | Abogacia Digital </p>}
    {!NavbarOpen && windowDimension.width < 800 ? (
      // Este es el que abre
      <CiMenuFries color='#f1f1f1' onClick={() => setNavbarOpen(!NavbarOpen)} 
      size={30}/>
    ) : windowDimension.width < 800 &&  (
    // Este cierra 
      <IoCloseOutline
        onClick={() => setNavbarOpen(!NavbarOpen)}
        color='#f1f1f1'
        size={25}
      />
    )}
   {NavbarOpen  && (
      <ul className={styles.linksContainer}>
        {links.map((x) => (
          <div   >
            <Link
              key={x.id} 
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
   {windowDimension.width > 800 && (
      <ul className={styles.linksContainer}>
        {links.map((x) => (
          <div key={x.id}>
            <Link
              key={x.id} 
              onClick={() => setNavbarOpen(false)}
              to={x.link}
              smooth
              duration={500}
              className={styles.navLink}>
              {x.link === "HowWeWork" ? "How We Work" : x.link} 
            </Link>
          <div className={styles.border}></div>
        </div>
      ))}
    </ul>
    )}
  </div>
  )
};

export default Navbar
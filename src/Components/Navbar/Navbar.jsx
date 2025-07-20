import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import linkedin from '../../assets/linkedin.png';  // Add your LinkedIn logo path
import github from '../../assets/github.png';      // Add your GitHub logo path
import scholar from '../../assets/scholar.png'; // Add your scholar logo path

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  }

  return (
    <div className='navbar'>
      {/* Social Icons */}
      <div className="nav-social-icons">
        <a href="https://www.linkedin.com/in/vaishnavi-gayke/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/VaishnaviGayke" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://scholar.google.com/citations?hl=en&user=8om5xqAAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=vaishnavipgayke2120%40gmail.com&authuser=5&gmla=AH8HC4wbl3GVHbsNGbHS4upuA3ivbApstP962GdK2Ru3G_3lsjH59_7rVMnMb2eubYG2k3kgbnSR9DZGA-zaYx9u" target="_blank" rel="noopener noreferrer">
          <img src={scholar} alt="Scholar" />
        </a>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home' offset={100}><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>My Experience</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Projects</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar;

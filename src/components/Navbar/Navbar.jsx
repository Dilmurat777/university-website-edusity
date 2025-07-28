import './Navbar.css';
import logo from '../../assets/logo.png';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const menuRef = useRef(null);
  const iconMenuRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    const handleClickOutside = (event) => {
      if (
        !hideMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconMenuRef.current &&
        !iconMenuRef.current.contains(event.target)
      ) {
        setHideMenu(true);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', () => {});
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hideMenu]);

  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  };


  const closeMenuOnClick = () => {
    setHideMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul ref={menuRef} className={`${hideMenu ? 'hide-mobile-menu' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={closeMenuOnClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-300} duration={500} onClick={closeMenuOnClick}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-300} duration={500} onClick={closeMenuOnClick}>
            About us
          </Link>
        </li>
        <li>
          <Link to="compus" smooth={true} offset={-300} duration={500} onClick={closeMenuOnClick}>
            Compus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-300} duration={500} onClick={closeMenuOnClick}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-300} duration={500} onClick={closeMenuOnClick}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} ref={iconMenuRef} />
    </nav>
  );
};

export default Navbar;

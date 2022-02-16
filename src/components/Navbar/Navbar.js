import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo-10.png';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from './NavbarElement';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
            <img
              src={Logo}
              alt='Jasa Penerjemah'
              style={{ width: '90px', height: 'auto', paddingRight: '10px' }}
            />
          </NavLogo>
          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='/'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Tentang Kami
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='service'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                scrollNav={scrollNav}
              >
                Layanan
              </NavLinks>
            </NavItem>
            <NavBtnLink
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              scrollNav={scrollNav}
            >
              Kontak
            </NavBtnLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

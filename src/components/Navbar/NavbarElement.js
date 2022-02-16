import styled from 'styled-components';
// import { Link as LinkR } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#b41727' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: ${({ scrollNav }) =>
    scrollNav ? '1px solid #rgba(61,61,61,0.69)' : 'transparent'};

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: 80px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavLogo = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#fff')} !important;
  text-decoration: none;
  padding-top: 18px;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    font-size: 2.5rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#fff')} !important;
  }
`;
export const ProductIcon = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 25%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ scrollNav }) =>
      scrollNav ? 'rgba(61,61,61,0.69)' : '#fff'} !important;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#fff')} !important;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;

  &.active {
    color: #01bf71 !important;
  }
  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`;
export const NavBtnLink = styled(LinkS)`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#fff')} !important;
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 5px 20px;
  margin-left: 70px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  border: ${({ scrollNav }) =>
    scrollNav ? '2px solid #fff' : '2px solid #fff'} !important;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;

  &.active {
    color: #01bf71 !important;
    border: 2px solid #01bf71 !important;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

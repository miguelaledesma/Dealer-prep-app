import Link from 'next/link';
import styled from 'styled-components'; 
import React, { useState } from "react";


const Nav = styled.nav`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: black;
top: 0;
left: 0;
right: 0;
`

const Hamburger = styled.div `
display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`
const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
  overflow: hidden;
  flex-direction: column;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  transition: max-height 0.3s ease-in;
  width: 100%;
}
`

const MenuLink = styled.a `
padding: 0.5rem 1rem;
cursor: pointer
text-align: center;
text-decoration: none;
color: white;
transition: all 0.3s ease-in;
font-size: 1.1rem;
&:hover {
  color: lightblue;
}
`

const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
    
     <Logo href="">
        Interview<span>Homework</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
          <Link href = "/" passHref>
        <MenuLink href="">Home</MenuLink>
        </Link> 
        <Link href = "/taskResponse" passHref >
        <MenuLink href="">PA Task</MenuLink>
        </Link> 
        <Link href = "/reflection" passHref >
        <MenuLink href="">Reflection</MenuLink>
        </Link> 
        <Link href = "/email" passHref >
        <MenuLink href="">Email Response</MenuLink>
        </Link> 
        <Link href = "/recommendation" passHref>
        <MenuLink href="">Recommendation</MenuLink>
        </Link> 
        <Link href = "/contact" passHref>
        <MenuLink href="">Contact</MenuLink>
        </Link> 
        
      </Menu>
    </Nav>
  );
};

export default Navbar; 
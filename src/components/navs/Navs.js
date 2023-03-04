import Container from 'react-bootstrap/Container';
import './Navs.css';
import {Nav, Navbar} from 'react-bootstrap';
import logo from './../../assets/logo.png'
import { useState } from 'react';

const Navs = (props) => {
    const navBar = document.querySelector(".navbar")
    window.addEventListener("scroll", () => {
        if(navBar && window.scrollY <= 100){
            navBar.style.boxShadow = 'none'
        }else if(navBar && window.scrollY > 100){
            navBar.style.boxShadow = '0px 0px 6px #ab3550'
            return
        }
    })

    return (
        <Navbar expand="lg" sticky='top'>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#foods">Explore Foods</Nav.Link>
                    <Nav.Link href="#reviews">Reviews</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>   
                </Nav>
                <Nav>
                    <Nav.Link id="lastnav">12344321</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}
 
export default Navs;
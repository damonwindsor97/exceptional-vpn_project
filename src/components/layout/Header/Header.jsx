import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import ExLogo from '../../../../public/images/global-network.png'
import SaleAlert from '@/components/features/SaleAlert/SaleAlert';

const Header = () => {


  return (
    <div>

 <Navbar collapseOnSelect expand="lg" bg="white" variant="light" >
      <Container>

        <Navbar.Brand href="home">
          <Image
                alt="logo"
                src={ExLogo}
                width="30"
                height="30"
              />
          Exceptional </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="features">Features</Nav.Link>
            <Nav.Link href="pricing">Pricing</Nav.Link>
            <Nav.Link href="whatisvpn">What is a VPN?</Nav.Link>
            <Nav.Link href="news">News</Nav.Link>
          </Nav>

          <Nav>

          <NavDropdown title="Contact+ " id="collasible-nav-dropdown">

              <NavDropdown.Item href="reviews">Reviews</NavDropdown.Item>
              <NavDropdown.Item href="contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href="about">
                About
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="privacypolicy">
                Privacy Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="terms">
                Ts & Cs
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link eventKey={2} href="#toggle">
              Light&Dark Toggle
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>

    <SaleAlert/>
    </div>

  )
}

export default Header
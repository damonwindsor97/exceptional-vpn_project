import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';

import ExLogo from '../../../../public/images/global-network.webp'
import SaleAlert from '@/components/features/SaleAlert/SaleAlert';
import styles from './Header.module.scss'

const Header = () => {

  const [query, setQuery] = useState()

  const handleChange = (d) => {
    console.log(d.target.value);
    setQuery(d.target.value);
  };

  // Create the value in State - Applies to both
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Looking for darkMode Value, loading into darkModeValue variable
    let darkModeValue = localStorage.getItem("darkMode")
    // IF a Dark Mode value is present
    if (darkModeValue === "true") {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])


  // Clikcing on this changes darkMode to False, save to Local Storage
  const handleWhite = (e) => {
    setDarkMode(false)
    localStorage.setItem("darkMode", "false")
  }

  // Clicking on this changes darkMode to True, save to Local Storage
  const handleBlack = (e) => {
    setDarkMode(true)
    localStorage.setItem("darkMode", "true")
  }

  return (
  <div>

  <Navbar className={styles.mainNav} collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" query={query} onChange={handleChange}>

    <link rel="stylesheeet" type="text/css" href={!darkMode ? '/light.css' : 'dark.css'}></link>

      <Container>

        <Navbar.Brand href="/">
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

            <Nav.Link type="button" id="switch" alt="LightMode" onClick={handleWhite}>
              Light
            </Nav.Link>
            <Nav.Link  type="button" id="switch" alt="DarkMode" onClick={handleBlack}>
              Dark
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
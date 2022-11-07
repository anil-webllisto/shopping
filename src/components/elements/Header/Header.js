import React from 'react';
import logo1 from '../../../images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <div className='col-md-2 '>
            <img src={logo1} className='img-fluid mx-2' width='100%' height={20} alt=' ' />
          </div>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <div className='col-md-6  justify-content-center d-flex'>
            <Nav.Link href='/' className='px-3'>
              Home
            </Nav.Link>
            <Nav.Link href='/contact' className='px-3'>
              Contact
            </Nav.Link>
            <Nav.Link href='/Explore' className='px-3'>
              Explore
            </Nav.Link>
          </div>
          <div className='col-md-4   text-center  px-5'>
            <button type='button' className='btn btn-primary  '>
              Login
            </button>
            &nbsp;&nbsp;&nbsp;
            <button type='button' className='btn btn-primary'>
              Register
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;

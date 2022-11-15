import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import logo1 from '../../../images/logo.png';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand='md' bg='white' varient='dark' className='p-0 '>
      <div className='container-fluid  header-bar'>
        <Navbar.Brand to='/' className='navbar-brand'>
          <img src={logo1} className='img-fluid mx-2' width='100%' height={20} alt=' ' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='navbar justify-content-center'>
          <Nav className='me-auto '>
            <Nav.Link to='/' className='text-dark px-4 '>
              Home
            </Nav.Link>
            <Nav.Link to='/contact' className='text-dark px-4 '>
              Contact
            </Nav.Link>
            <Nav.Link to='/explore' className='text-dark  px-4'>
              Explore
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Button variant='primary'>Login</Button> &nbsp;&nbsp;&nbsp;
          <Button className='bg-warning text-dark border-0'>Register</Button>{' '}
        </Nav>
      </div>
    </Navbar>
  );
}

export default CollapsibleExample;

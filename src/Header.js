// src/Header.js
import React from 'react';
import { Navbar, Form, FormControl, Nav, Dropdown } from 'react-bootstrap';
import { FaBell, FaUser } from 'react-icons/fa';

const Header = () => (
  <Navbar bg="light" expand="lg" className="p-3">
    <Form className="d-flex w-50">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
    </Form>
    <Nav className="ml-auto">
      <Nav.Link href="#"><FaBell size={20} /></Nav.Link>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaUser size={20} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Item href="#">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  </Navbar>
);

export default Header;

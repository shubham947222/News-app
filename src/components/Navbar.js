import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/headlines">
            News~Feeder
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/covid">
                Covid-19
              </Nav.Link>

              <Nav.Link as={NavLink} to="/technology">
                Technology
              </Nav.Link>
              <Nav.Link as={NavLink} to="/politics">
                National
              </Nav.Link>
              <Nav.Link as={NavLink} to="/international">
                International
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sports">
                Sports
              </Nav.Link>
              <Nav.Link as={NavLink} to="/healthcare">
                HealthCare
              </Nav.Link>
            </Nav>
            <Nav className="me">
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signUp">
                SignUp
              </Nav.Link>
              <Avatar
                style={{ left: "1rem" }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

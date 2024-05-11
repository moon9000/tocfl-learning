import * as React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export function NavBar({ setter }) {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-white" href="/">
            Home
          </Nav.Link>
          <Navbar.Brand>
            <Link className="text-white" to="/words">
              TOCFL List
            </Link>
          </Navbar.Brand>
        </Nav>

        <Navbar.Brand>
          <a className="text-white" href="https://lmit.edu.tw/lc/tocfl">
            Official informations about the TOCFL test
          </a>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavBar.defaultProps = {
  setter: null,
};

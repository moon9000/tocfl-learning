import * as React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonBase } from "../Button";

export function NavBar({ setter }) {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link className="text-white" to="/">
            TOCFL Learning
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            <NavDropdown
              className="bg-white"
              title="Tools"
              id="basic-nav-dropdown"
            >
              <div className="flex flex-col space-y-2">
                <Link to="/words">TOCFL List</Link>
                <Link to="/ln">Light novel parser</Link>
                <Link to="/taiwan-residency-infos">Taiwan Residency Infos</Link>
                <Link to="/news">News from Taiwanese newspaper</Link>
                <Link to="/comments">Comments from PTT</Link>
                <Link to="/animes">Animes</Link>
                <Link to="/songs">Songs</Link>
              </div>
            </NavDropdown>
          </Nav>
          {setter ? (
            <button
              className="bg-white border border-black"
            >
              Search
            </button>
          ) : null}

          <Form inline onSubmit={null}>
            <div className="flex flex-row space-x-4">
              <ButtonBase
                variant="outline"
                color="secondary"
                placeholder="Search"
                className="mr-sm-4"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                Search
              </ButtonBase>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-4"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <ButtonBase
                value="{value}"
                text="Search"
                as="button"
                type="text"
                variant="outline-info"
              />
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

NavBar.defaultProps = {
  setter: null,
};

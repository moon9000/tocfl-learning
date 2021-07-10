import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonBase } from "../Button/Button.js";

export function NavBar() {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    return "";
  }
  
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Link className="text-white" to="/">Chinese Learning</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <NavDropdown className="bg-white" title="Tools" id="basic-nav-dropdown">
              <div className="flex flex-col space-y-2">
              <Link to="/ln">Light novel parser</Link>
              <Link to="/news">News from Taiwanese newspaper</Link>
              <Link to="/comments">Comments from PTT</Link></div>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
            <div className="flex flex-row space-x-4">
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
              type="submit"
              variant="outline-info"
            /></div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

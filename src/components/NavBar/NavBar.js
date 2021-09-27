import * as React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import WordDataService from "../../db/services/word.service";
import { Link } from "react-router-dom";
import { ButtonBase } from "../Button";

export function NavBar({ setter }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(setter) {
    if (!setter) {
      return null;
    }
    WordDataService.findAll() //retrive all words for a specific type
      .then((response) => {
        let filteredWords = response.data.filter(
          (word) => word.chinese.includes(value) //search words that matches both the levelChoice and the typeChoice
        );
        setter(filteredWords);
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
                <Link to="/news">News from Taiwanese newspaper</Link>
                <Link to="/comments">Comments from PTT</Link>
              </div>
            </NavDropdown>
            <Nav.Link className="text-white" href="/login">
              Login
            </Nav.Link>
          </Nav>
          {setter ? (
            <button
              className="bg-white border border-black"
              onClick={handleSubmit(setter)}
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

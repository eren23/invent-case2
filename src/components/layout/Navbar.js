import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  InputGroup,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUser } from "../../actions/getUsers";
import "./Navbar.css";

const NavbarComponent = ({ searchUser }) => {
  const [year, setYear] = useState("");
  const [type, setType] = useState("");


  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 100)).fill('').map((v, idx) => now - idx);


  const onFormSubmit = (e) => {

    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    const queryParam = `?apikey=756abb2f&s=${formDataObj.myInput}&type=${type}&year=${year}&plot=full`
    searchUser(queryParam);
  };

  const onYearSelect = (e) => {

    setYear(e);
  };
  const onTypeSelect = (e) => {

    setType(e);
  };

  const sourceTypes = ["movie", "series", "episode"]

  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFFFFF" }} expand="lg">
        <Nav className="mr-auto">
          <Form inline onSubmit={onFormSubmit}>
            <InputGroup>

              <FormControl
                type="text"
                placeholder="Search"
                name="myInput"
                className="mr-sm-1"
              />
            </InputGroup>

            <NavDropdown
              className="Dropdown"
              title="Year"
              id="basic-nav-dropdown"
              onSelect={onYearSelect}
            >
              {years.map((year) => { return <NavDropdown.Item eventKey={year} key={year}>{year}</NavDropdown.Item> })}
            </NavDropdown>
            <NavDropdown
              className="Dropdown"
              title="Type"
              id="basic-nav-dropdown"
              onSelect={onTypeSelect}
            >
              {sourceTypes.map((type) => {
                const toUpper = type.charAt(0).toUpperCase() + type.slice(1);
                return <NavDropdown.Item eventKey={type} key={type}>{toUpper}</NavDropdown.Item>
              })}
            </NavDropdown>
          </Form>
        </Nav>
      </Navbar>
    </div>
  );
};

NavbarComponent.propTypes = {
  searchUser: PropTypes.func.isRequired,
};

export default connect(null, { searchUser })(NavbarComponent);

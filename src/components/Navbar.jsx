import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../page/routes";

const Navbar = ({children}) => {

  return (
    <Row align="middle">
      <Col>
        <img
          alt="logo"
          style={{ width: "100px", height: "100px", padding: "0px 0px" }}
          src="logo-lg.png"
        />
      </Col>
      <Col>
        <Link to={routes.index.path}><Button type="text">Home</Button></Link>
      </Col>
      { children }
    </Row>
  );
};

export default Navbar;

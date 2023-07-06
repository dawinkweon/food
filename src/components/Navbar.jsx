import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../page/routes";
import Search from "antd/es/input/Search";

const Navbar = ({onPerformSearch, onCreateClick, children}) => {
  const [searchText, setSearchText] = useState("");

  const onTextChange = (value) => {
    if (value === "") {
      // force search when cleared
      clearSearch();
    }
    setSearchText(value);
  };

  const onSearch = () => {
    onPerformSearch(searchText);
  };

  const clearSearch = () => {
    onPerformSearch("");
  }

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
      <Col>
        <Button type="text" onClick={onCreateClick}>Create</Button>
      </Col>
      <Col flex="auto">
        <Search
          style={{ padding: "0px 15px", margin: "15px 0px" }}
          size="large"
          value={searchText}
          onChange={(evt) => onTextChange(evt.target.value)}
          allowClear
          placeholder="Search"
          onSearch={onSearch}
          enterButton
        />
      </Col>
      { children }
    </Row>
  );
};

export default Navbar;

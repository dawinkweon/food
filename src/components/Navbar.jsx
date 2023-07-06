import { Button, Col, Row } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";

const Navbar = ({onPerformSearch}) => {
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
        <Button type="text">Home</Button>
      </Col>
      <Col>
        <Button type="text">Create</Button>
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
    </Row>
  );
};

export default Navbar;

import { Button, Col, Row } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  const onSearch = () => {
    console.info(`Seraching text: ${searchText}`);
  };

  return (
    // <div className="navbar">
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
          style={{ padding: "0px 15px" }}
          size="large"
          value={searchText}
          onChange={(evt) => setSearchText(evt.target.value)}
          allowClear
          placeholder="Search"
          onSearch={onSearch}
          enterButton
        />
      </Col>
    </Row>
    // </div>
  );
};

export default SearchPage;

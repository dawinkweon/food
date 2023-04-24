import { Button } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  const onSearch = () => {
    console.info(`Seraching text: ${searchText}`);
  };

  return (
    <div className="navbar">
      <img alt="logo" style={{ width: "100px", height: "100px", padding: "0px 15px" }} src="logo-lg.png"/>
      <Button type="text">Home</Button>
      <Button type="text">Create</Button>
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
    </div>
  );
};

export default SearchPage;

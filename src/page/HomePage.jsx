import { useState } from "react";
import { Urls } from "../api/testData";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import api from "../api";

export default function HomePage() {
  const [imageUrls, setImageUrls] = useState([]);

  const onPerformSearch = (value) => {
    const searchResults = api.search(value);
    setImageUrls(searchResults);
  }
  return (
    <>
      <Navbar onPerformSearch={onPerformSearch}/>
      <Content imageUrls={imageUrls} />
    </>
  );
};

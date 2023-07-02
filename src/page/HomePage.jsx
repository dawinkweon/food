import { useEffect, useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import api from "../api";

export default function HomePage() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fn = async () => {
      await showAllThings();
    };
    fn().catch(console.error);
  }, []);

  const onPerformSearch = (value) => {
    const fn = async () => {
      if (isTagTooShort(value)) {
        return await showAllThings();
      }

      const thingsByTag = await api.findThingsByTag(value);
      if (thingsByTag.length <= 0) {
        console.trace("No match found by tag so showing all things.");
        return await showAllThings();
      }

      console.trace("Matches found by tag, so showing them.");
      const imgs = thingsByTag.map(mapToImage);
      setImageUrls(imgs);
    };
    fn().catch(console.error);
  };

  const showAllThings = async () => {
    const things = await api.listAllThings();
    const imgs = things.map(mapToImage);
    setImageUrls(imgs);
  };

  return (
    <>
      <Navbar onPerformSearch={onPerformSearch} />
      <Content imageUrls={imageUrls} />
    </>
  );
}

const isTagTooShort = (value) => !value || value.length <= 2;

const mapToImage = (thing) => thing.img_url;

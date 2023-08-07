import { useEffect, useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import api from "../api";
import CreateThingDrawer from "../components/CreateThingDrawer";

export default function HomePage() {
  const [imageUrls, setImageUrls] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = async () => {
      await showAllThings();
    };
    fn().catch(console.error);
  }, []);

  const onSearch = (value) => {
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

  const onCreate = (newThing) => {
    alert(`New thing created: ${JSON.stringify(newThing)}`);

    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showAllThings = async () => {
    const things = await api.listAllThings();
    const imgs = things.map(mapToImage);
    setImageUrls(imgs);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <Navbar onPerformSearch={onSearch} onCreateClick={showDrawer} />
      <Content imageUrls={imageUrls} />
      <CreateThingDrawer onCreate={onCreate} open={open} onClose={onClose} />
    </>
  );
}

const isTagTooShort = (value) => !value || value.length <= 2;

const mapToImage = (thing) => thing.img_url;

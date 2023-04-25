import { useState } from "react";
import Masonry from "react-masonry-css";
import { Urls } from "./constants";

const Page = () => {
  const [imageUrls, setImageUrls] = useState(Urls);

  return (
    <Masonry
      breakpointCols={{ default: 5 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {imageUrls.map((url) => (
        <div>
          <img
            key={url}
            alt=""
            src={url}
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>
      ))}
    </Masonry>
  );
};
export default Page;

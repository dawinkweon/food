import Masonry from "react-masonry-css";

export default function Content({imageUrls}) {
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
}

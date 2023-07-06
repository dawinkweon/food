import Masonry from "react-masonry-css";

export default function Content({ imageUrls }) {
  const breakpointCols = { default: 5, 1100: 4, 700: 2, 500: 1 };

  return (
    <Masonry
      breakpointCols={breakpointCols}
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

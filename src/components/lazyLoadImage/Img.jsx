import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Img = (src, className) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="this is the name"
      effect="blur"
      src={src}
    />
  );
};

export default Img;

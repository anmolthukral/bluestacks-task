import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.png";
import image4 from "../assets/4.jpg";
export default function Imageitem({ value }) {
  const imagesMap = { 1: image1, 2: image2, 3: image3, 4: image4 };
  return (
    <>
      <img
        className="img"
        src={imagesMap[value]}
        alt={`placeholder-${value}`}
      />
    </>
  );
}

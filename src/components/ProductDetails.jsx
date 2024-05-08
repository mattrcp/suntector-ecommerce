import styles from "../styles";

const ProductDetails = ({
  name,
  price,
  description,
  id,
  model,
  material,
  gender,
  frame,
  face,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductDetails;

import { FaStar } from "react-icons/fa";
type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
      <div>
        <span>+</span>
        <span>Add To The Cart</span>
      </div>
    </div>
  );
};

export default ProductCard;

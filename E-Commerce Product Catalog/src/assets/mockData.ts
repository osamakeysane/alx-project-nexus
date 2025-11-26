import Image1 from "./images/bag.jpeg";
import Image2 from "./images/sandle.jpg";
import Image3 from "./images/watch.jpg";
import Image4 from "./images/cap.jpg";
import Image5 from "./images/boot1.jpeg";
import Image6 from "./images/dove.jpeg";
import Image7 from "./images/headphone.jpeg";
import Image8 from "./images/robot.jpeg";
import Image9 from "./images/wwatch.jpg";
import Image10 from "./images/shirt.jpg";

// TYPE for products
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

// TYPE for categories
export type Category = string;

// Categories list
export const Categories: Category[] = [
  "Electronic",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Automotive",
];

// Mock product data
export const mockData: Product[] = [
  {
    id: 1,
    image: Image9,
    name: "product 1",
    price: 29.99,
  },
  {
    id: 2,
    image: Image8,
    name: "product 2",
    price: 39.99,
  },
  {
    id: 3,
    image: Image7,
    name: "product 3",
    price: 19.99,
  },
  {
    id: 4,
    image: Image6,
    name: "product 4",
    price: 59.99,
  },
  {
    id: 5,
    image: Image10,
    name: "product 5",
    price: 29.99,
  },
  {
    id: 6,
    image: Image4,
    name: "product 6",
    price: 9.99,
  },
  {
    id: 7,
    image: Image5,
    name: "product 7",
    price: 29.99,
  },
  {
    id: 8,
    image: Image3,
    name: "product 8",
    price: 49.99,
  },
  {
    id: 9,
    image: Image2,
    name: "product 9",
    price: 29.99,
  },
  {
    id: 10,
    image: Image1,
    name: "product 10",
    price: 29.99,
  },
];

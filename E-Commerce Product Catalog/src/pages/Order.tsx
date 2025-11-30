import { useNavigate } from "react-router-dom";

// Define the type for each product in the order
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Define the type for the entire order
type OrderType = {
  orderNumber: string;
  shippingInformation: {
    address: string;
    city: string;
    zip: string;
  };
  products: Product[];
  totalPrice: number;
};

// Props type for the Order component
type OrderProps = {
  order: OrderType;
};

const Order = ({ order }: OrderProps) => {
  const navigate = useNavigate();
  if (!order) {
    //fallback if order is not yet vailable
    return <p>No order found. Please place an order first.</p>;
  }
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>Your order has been placed successfully</p>

      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order summary</h3>
        <p>Order number: {order.orderNumber}</p>

        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping information</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>

        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Products Ordered</h4>

          {order.products.map((product: Product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>
                {product.price} x {product.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <span>Total price:</span>
          <span className="font-semibold">{order.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
          Track Order
        </button>
        <button
          className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
          onClick={() => navigate("/")}
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Order;

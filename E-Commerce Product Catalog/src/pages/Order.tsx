type OrderProps = {
  order: any; // later we will replace 'any' with a specific Order type
};

const Order = ({ order }: OrderProps) => {
  return (
    <div>
      <h2>Thank you for your order</h2>
      <p>Your order has been placed successfully</p>

      <div>
        <h3>Order summary</h3>
        <p>Order number: {order.orderNumber}</p>
        <div>
          <h2>Shipping information</h2>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3>Products Ordered</h3>
          {order.products.map((product) => (
            <div>
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>
                {product.price} x {product.quantity}
              </p>
            </div>
          ))}
        </div>
        <div>
          <span>Total price:</span>
          <span>{order.totalPrice}</span>
        </div>
        <div>
          <button>Order tracking</button>
          <button>Continue shopping</button>
        </div>
      </div>
    </div>
  );
};
export default Order;

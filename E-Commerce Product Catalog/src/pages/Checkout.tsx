import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

type CheckoutProps = {
  setOrder: (order: any) => void; // or replace 'any' with a real type later
};
function Checkout({ setOrder }: CheckoutProps) {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setshippingToggle] = useState(true);
  const [paymentToggle, setpaymentToggle] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const placeOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };

    setOrder(newOrder); // ✅ save the order
    navigate("/order-confirmation"); // ✅ go to confirmation page
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        {/* LEFT SIDE */}
        <div className="md:w-2/3">
          <div className="border p-4 mb-6">
            {/* HEADER */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {/* COLLAPSIBLE BODY */}
            <div className={`space-y-4 mt-4 ${billingToggle ? "" : "hidden"}`}>
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="email"
                  className="border p-2 rounded"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col">
                <label>Phone</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
          {/*shipping */}
          <div className="border p-4 mb-6">
            {/* HEADER */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setshippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {/* COLLAPSIBLE BODY */}
            <div className={`space-y-4  ${shippingToggle ? "" : "hidden"}`}>
              <div className="flex flex-col">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-3 py-2 border"
                  placeholder="Enter your address"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  className="border p-2 rounded"
                  placeholder="Enter your city"
                  value={shippingInfo.city}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      city: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  className="border p-2 rounded"
                  placeholder="Enter zip code"
                  value={shippingInfo.zip}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zip: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/*payment method */}
          <div className="border p-4 mb-6">
            {/* HEADER */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setpaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">payment methods</h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {/* COLLAPSIBLE BODY */}
            <div className={`space-y-4 mt-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setpaymentMethod("cod")}
                />

                <label className="block text-gray-700">cash on delivery</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dbc"}
                  onChange={() => setpaymentMethod("dbc")}
                />

                <label className="block text-gray-700">Debit card</label>
              </div>
              {paymentMethod === "dbc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-extrabold mb-4">
                    Debit card Information
                  </h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      card number
                    </label>
                    <input
                      type="text"
                      placeholder="enter card  number"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className=" mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      card holder information
                    </label>
                    <input
                      type="text"
                      placeholder="enter card holder name"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-600 font-semibold mb-2">
                        Expiry date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        cvv
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded-2xl"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>total price</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800#"
            onClick={placeOrder}
          >
            place order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

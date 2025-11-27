import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Checkout() {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setshippingToggle] = useState(true);
  const [paymentToggle, setpaymentToggle] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState("cod");

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
            <div className={`space-y-4 mt-4 ${shippingToggle ? "" : "hidden"}`}>
              <div className="flex flex-col">
                <label>Address</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col">
                <label>City</label>
                <input
                  type="email"
                  className="border p-2 rounded"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col">
                <label>Zip Code</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Enter your phone number"
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
          <p>Your order summary will be here...</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

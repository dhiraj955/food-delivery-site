import React from "react";
import { MdDeleteForever } from "react-icons/md";
import useCartStore from "../store/cartStore";
import { toast } from "react-toastify";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // 🧮 Calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const vat = +(subtotal * 0.13).toFixed(2); // 13% VAT
  const deliveryCharge = subtotal > 0 ? 100 : 0; // Rs 100 fixed charge
  const grandTotal = subtotal + vat + deliveryCharge;

  return (
    <div className="w-full h-auto flex flex-col gap-4 overflow-y-auto max-h-[85vh] ">
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">Cart is Empty</div>
      ) : (
        <>
          {/* 🛒 Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="w-full h-[120px] p-2 shadow-lg flex justify-between bg-white rounded-lg"
            >
              <div className="w-[60%] h-full flex gap-5">
                <div className="w-[60%] h-full overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-[40%] h-full flex flex-col gap-5">
                  <div className="text-lg text-gray-600 font-semibold">
                    {item.name}
                  </div>
                  <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold text-xl">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-[30%] h-full bg-white flex justify-center items-center text-red-500"
                    >
                      -
                    </button>
                    <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-red-400">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-[30%] h-full bg-white flex justify-center items-center text-red-500"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-end gap-6">
                <span className="text-xl text-red-400 font-semibold">
                  Rs {item.price * item.quantity} /-
                </span>
                <MdDeleteForever
                  className="w-[30px] h-[30px] text-red-600 cursor-pointer"
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.error(`${item.name} removed from cart`);
                  }}
                />
              </div>
            </div>
          ))}

          {/* 💰 Totals Section */}
          <div className="mt-4 border-t pt-4 text-sm text-gray-700 space-y-2 px-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>Rs {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (13%):</span>
              <span>Rs {vat}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge:</span>
              <span>Rs {deliveryCharge}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg text-black">
              <span>Grand Total:</span>
              <span>Rs {grandTotal}</span>
            </div>
          </div>

          {/* 🧾 Place Order Button */}
          <div className="px-2 mt-4">
            <button
              onClick={() => {
                toast.success("Order Placed Successfully 🎉");
              }}
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-all"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

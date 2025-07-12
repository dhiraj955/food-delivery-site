import React, { useContext, useEffect } from "react";
import { MdNoFood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import useCartStore from "../store/cartStore";

function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);
  const cartCount = useCartStore((state) => state.cartCount());
  useEffect(() => {
    let newlist = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newlist);
  }, [input]);
  return (
    <div className="w-full h-[100px] flex  justify-between items-center px-5 md:px-8 fixed top-0 left-0  z-50 ">
      <div className="w-[90px] h-[70px] bg-white flex flex-col justify-center items-center rounded-md shadow-xl">
        <MdNoFood className="w-[30px] h-[30px] text-red-600 font-Poppins" />
        <h3 className="text-2xl font-bold text-gray-800">
          D<span className="text-red-500">i</span>s
          <span className="text-red-500">h</span>
          <span className="text-yellow-500">l</span>y
        </h3>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[50%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
      >
        <IoSearch className="text-red-600 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search Items..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-[100%] outline-none text-[14px] md:text-[20px]"
        />
      </form>
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative"
        onClick={() => setShowCart(true)}
      >
        {cartCount > 0 && (
          <span className="absolute top-0 right-2 text-red-600 font-bold ">
            {cartCount}
          </span>
        )}
        <AiOutlineShopping className="w-[30px] h-[30px] text-red-600" />
      </div>
    </div>
  );
}

export default Nav;

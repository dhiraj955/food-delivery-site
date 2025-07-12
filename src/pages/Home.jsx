import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../components/Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Cart from "../components/Cart";
import useCartStore from "../store/cartStore";

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  const cartItems = useCartStore((state) => state.cartItems);
  const isInCart = (id) => cartItems.some((item) => item.id === id);
  const [activeCategory, setActiveCategory] = useState("All");

  function filterCate(category) {
    setActiveCategory(category);
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-200 w-full min-h-screen pt-[110px]">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6">
          {Categories.map((item) => {
            const isActive = activeCategory === item.name;
            return (
              <div
                key={item.name}
                className={`w-[160px] h-[160px] bg-white flex flex-col gap-5 p-5 justify-center items-center text-[20px] font-semibold text-gray-600 rounded-full shadow-xl hover:bg-red-200 cursor-pointer transition-all duration-200
                  ${
                    isActive
                      ? "bg-red-200 text-red-600 border-2 border-red-500"
                      : ""
                  }`}
                onClick={() => filterCate(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.map((item) => {
          const inCart = isInCart(item.id);
          return (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
              inCart={inCart}
            />
          );
        })}
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-5 transition-all z-[999] ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-red-500 text-[18px] font-semibold">
            Order items
          </span>
          <RxCross2
            className="w-[30px] h-[30px] text-red-500 text-[18px] font-semibold cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </header>
        <Cart />
      </div>
    </div>
  );
}

export default Home;

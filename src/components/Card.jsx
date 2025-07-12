import React from "react";
import { GiLindenLeaf } from "react-icons/gi";
import { GiRoastChicken } from "react-icons/gi";
import useCartStore from "../store/cartStore";
import { toast } from "react-toastify";

function Card({name, image, id, price, type, inCart}) {

  const addToCart = useCartStore((state) => state.addToCart);
  

  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-red-300">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-red-600">Rs {price}/-</div>
        <div className="flex justify-center items-center gap-2 text-red-600 text-lg font-semibold">{type==="veg" ? <GiLindenLeaf/> : <GiRoastChicken/>} <span>{type}</span></div>
      </div>
      <button
  onClick={() => {
    if (!inCart) {
      addToCart({ id, name, image, price, type });
      toast.success(`${name} added to cart`);
    } else {
      toast.info(`${name} is already in the cart`);
    }
  }}
  disabled={inCart}
  className={`w-full p-3 rounded-lg text-white transition-all duration-200 ${
    inCart ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-400"
  }`}
>
  {inCart ? "Already in Cart" : "Add to Dish"}
</button>
    </div>
  );
}

export default Card;

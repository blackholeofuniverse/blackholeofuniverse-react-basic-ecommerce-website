import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = ({ data }) => {
  const { id, productImage, productName, price } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div>
      <div className="flex p-4 gap-4 rounded-2xl w-[40rem] max-md:w-[20rem] justify-start items-center shadow-lg">
        <img
          src={productImage}
          alt="product_image"
          //   width={150}
          className="object-contain w-[150px] max-md:w-[75px]"
        />
        <div className="">
          <p className="text-xl max-md:text-lg">
            <b>{productName}</b>
          </p>
          <p className="text-xl max-md:text-lg">${price}</p>
          <div className="">
            <button
              onClick={() => removeFromCart(id)}
              className="p-1 bg-black text-white px-3 rounded-md font-semibold"
            >
              -
            </button>
            <input
              type="text"
              size={1}
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              className="outline-none p-1 border border-black rounded-md text-center"
            />
            <button
              onClick={() => addToCart(id)}
              className="p-1 bg-black text-white px-3 rounded-md font-semibold"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

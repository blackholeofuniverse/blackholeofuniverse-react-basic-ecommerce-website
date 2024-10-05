import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="flex flex-col items-center p-2">
      <div className="">
        <h1 className="text-8xl font-bold text-center p-4 max-md:text-2xl">
          My Cart
        </h1>
      </div>
      <div className="flex flex-col gap-8 p-8">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="">
          <p>Subtotal: ${totalAmount}</p>
          <div className="flex gap-4 m-4">
            <Link to={"/"}>
              <button className="px-4 py-3 bg-black text-white font-medium text-nowrap text-center rounded-md hover:bg-white border border-transparent hover:text-black hover:border hover:border-black">
                Continue Shopping
              </button>
            </Link>
            <button className="px-4 py-3 bg-black text-white font-medium text-nowrap text-center rounded-md hover:bg-white border border-transparent hover:text-black hover:border hover:border-black">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;

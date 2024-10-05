import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <div className="flex flex-col p-4 gap-2 rounded-md justify-start items-center">
      <img src={productImage} alt="product_image" width={400} />
      <div className="">
        <p className="text-xl">
          <b>{productName}</b>
        </p>
        <p className="text-xl">${price}</p>
      </div>
      <button onClick={() =>  addToCart(id)} className="px-4 py-3 bg-black text-white font-medium text-nowrap text-center rounded-md hover:bg-white border border-transparent hover:text-black hover:border hover:border-black">
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;

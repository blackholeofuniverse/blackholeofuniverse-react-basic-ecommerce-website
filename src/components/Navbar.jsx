import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-black uppercase flex justify-between p-4 text-xl items-center text-white">
        <Link to={"/"} className="max-md:text-center" >Shop</Link>
        <Link to={"/cart"} className="">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

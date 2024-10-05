import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-8xl font-bold text-center p-4 max-md:text-2xl">
          Samrat&apos;s Shop
        </h1>
      </div>
      <div className="w-full flex gap-12 flex-wrap justify-start items-center p-4">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

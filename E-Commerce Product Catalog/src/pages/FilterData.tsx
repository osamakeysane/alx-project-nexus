import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";
import notFound from "../assets/images/not-found.jpeg";

const FilterData: React.FC = () => {
  const filteredProducts = useSelector(
    (state: RootState) => state.product.filteredData
  );

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
            {filteredProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={notFound} alt="" />
        </div>
      )}
    </div>
  );
};

export default FilterData;

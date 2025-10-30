import { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3003/products`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productList.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>

    </div>
  );
};

export default ProductAll;

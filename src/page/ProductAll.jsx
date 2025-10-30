import { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";
import { useSearchParams } from "react-router-dom";


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값",searchQuery);
    let url = `https://my-json-server.typicode.com/eeeunhey/Temburins_Clone/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

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

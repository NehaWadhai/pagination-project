import { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products?_gl=1*1m7ilfo*_ga*NTM5NzI4NzE4LjE3NzM0NDQ1MzE.*_ga_TPY1RGQLFR*czE3NzUyMDMyNDUkbzMkZzAkdDE3NzUyMDMyNDkkajU2JGwwJGgw"
    );

    const data = await response.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products.map((ele) => {
        return (
          <div>
            <img src={ele.images[0]} />;
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;

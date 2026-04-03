import { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page,setPage] = useState(0)
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

  const onClickPage = (e,i) =>{
      setPage(i)
  }

  const onClickPrev = () =>{
      setPage(prev =>prev - 1)
  }

  const onClickNext = () =>{
    setPage(prev =>prev +1 )
}
  return (
    <div>
      {products?.slice(page * 10, (page + 1) * 10).map((ele) => {
        return (
          <div className="product">
            <img className="img" src={ele.images[0]} />
            <span>{ele.title}</span>
          </div>
        );
      })}
      <div className="pages">
        <button className="buttons" disabled={page === 0} onClick={onClickPrev}>Prev</button>
       {
        [...Array(products.length / 10)].map((ele,i) =>{
         return <span className="buttons" onClick={(e) =>onClickPage(e,i)}>{i + 1}</span>
        })
       }
        <button className="buttons" disabled={page === products.length /10 - 1} onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;

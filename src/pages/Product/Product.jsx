import React, { useEffect, useState } from "react";
import Top from "../../components/Top/Top";
import Search from "../../components/Search/Search";
import ProductBox from "../../components/ProductBox/ProductBox";
import axios from "axios";
import AddBasketButton from "../../components/Buttons/AddBasketButton";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);

  const addBasket = (id) => {
    axios.post('https://dummyjson.com/carts/1', {
        id: 1,
        quantity: 1
    })
  }

  return (
    <div>
      <Top />
      <Search />
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {data &&
          data.map((sitare) => {
            return <div style={{border: '1px solid gray'}}> <ProductBox product={sitare} /> <AddBasketButton/> </div>;
          })}
          
      </div>
    </div>
  );
};

export default Product;

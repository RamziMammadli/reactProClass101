import React, { useEffect, useState } from "react";
import Top from "../../components/Top/Top";
import Search from "../../components/Search/Search";
import ProductBox from "../../components/ProductBox/ProductBox";
import AddBasketButton from "../../components/Buttons/AddBasketButton";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Product = () => {
  const data = useSelector((state) => state.get.products);
  const [buttonText , setButtonText ] = useState('sebete at')

  const dispatch = useDispatch();

  const addBasketItem = (item) => {
    axios.post('link',item)
  };

  const deleteBasketItem = (item) => {
    axios.delete(`link/${item.id}`)
  }

  return (
    <div>
      <Top />
      <Search />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid gray",
                  marginTop: "20px",
                  borderRadius: 20,
                  marginLeft: "20px",
                }}
              >
                <ProductBox product={item} />
                <AddBasketButton
                  text={buttonText} // Eğer ürün sepete ekliyse "delete" olacak, değilse "add basket" olacak
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import Top from "../../components/Top/Top";
import Search from "../../components/Search/Search";
import ProductBox from "../../components/ProductBox/ProductBox";
import AddBasketButton from "../../components/Buttons/AddBasketButton";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../api/reducer/getSlice";

const Product = () => {
  const data = useSelector((state) => state.get.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

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
                key={item.id} // Add a unique key prop for each item
                style={{
                  border: "1px solid gray",
                  marginTop: "20px",
                  borderRadius: 20,
                  marginLeft: "20px",
                }}
              >
                <ProductBox product={item} />
                <AddBasketButton text="add basket" />
                <AddBasketButton text="buy" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from "react";
import "./App.css";
import { ProductInfo } from "./Products";

interface Props {
  item: ProductInfo;
  buy: (price: number) => void;
  count: number;
}

export const Product = ({ item, buy, count }: Props) => {
  const [amount, setAmount] = useState(item.amount);
  const handleClick = (price: number, amount: number) => {
    buy(price);
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      setAmount(0);
    }
  };
  return (
    <>
      <div className="product">
        <img
          src={item.img}
          alt="prodcuct"
          className={`${amount === 0 ? "noProduct" : ""}`}
        />
        x{amount}
        <br />
        {item.name}
        <br />
      </div>
      <button
        disabled={amount === 0 || count < item.price ? true : false}
        onClick={() => handleClick(item.price, amount)}
        className={`${
          amount === 0 || count < item.price ? "disable" : "productButton"
        }`}>
        {item.price}
      </button>
    </>
  );
};

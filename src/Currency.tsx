import React from "react";
import "./App.css";
import { useState } from "react";

interface Product {
  id: number;
  count: number;
  img: string;
  nominal: number;
}

interface Props {
  item: Product;
  addNominal: (price: number) => void;
}

export const Currency = ({ item, addNominal }: Props) => {
  const [count, setCount] = useState(item.count);
  const handleAddNominal = (nominal: number, count: number) => {
    addNominal(nominal);
    setCount(count + 1);
  };
  return (
    <div className="currency">
      <img
        src={item.img}
        alt="nominal"
        onClick={() => handleAddNominal(item.nominal, count)}
        className="imgNominals"
      />
      x{count}
    </div>
  );
};

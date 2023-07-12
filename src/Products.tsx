import React from "react";
import { Product } from "./Product";

export interface ProductInfo {
  id: number;
  amount: number;
  name: string;
  price: number;
  img: string;
}
export interface Props {
  products: ProductInfo[];
  buy: (price: number) => void;
  count: number;
}

export const Products = ({ buy, products, count }: Props) => {
  return (
    <div className="products">
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Product buy={buy} item={item} count={count} />
          </li>
        ))}
      </ul>
    </div>
  );
};

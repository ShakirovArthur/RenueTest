import React from "react";
import Product from "./Product";

export default function Products({ buy,products,count }) {
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
}

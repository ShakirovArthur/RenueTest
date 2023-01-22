import { useState } from "react";
import "./App.css";
import Products from "./Products";
import Currency from "./Currency";
import products from './data/product'
import nominal from "./data/nominals";
import denominations from "./data/denominations";

const change = (change, object) => {
  let result = {};
  for (let item of object) {
    if (change > 0) {
      let count = Math.floor(change / item.price);
      let minCount = Math.min(count, item.amount);
      if (count >= 1) {
        change = change - item.price * minCount;
        result[item.name] = minCount;
      }
    }
  }
  return {result, change} ;
};

function App() {
  const [count, setCount] = useState(0);
  const [nomianlChange,setNominalChange] = useState();
  const [productChange,setProductChange] = useState()
  const [prodcucts] = useState(products);
  const [nominals] = useState(nominal);
  const [denomination] = useState(denominations);
  const handleBuy = (price) => {
    setCount(count - price);
  };
  
  const returnChange = (count) => {
    const firstResult = change(count,nominals);
    if(firstResult.change > 0){
      const secondResult = change(firstResult.change,prodcucts)
      setNominalChange(Object.entries(firstResult.result));
      setProductChange(Object.entries(secondResult.result))
      setCount(0)
    } else {
      setNominalChange(Object.entries(firstResult.result))
      setCount(0)
    }
  }
  const addNominal = (price) => {
    for (let key in nominals) {
      if (key === `${price}`) {
        nominals[key]++;
      }
    }
    setCount(count + price);
  };
  return (
    <div className="App">
      <Products buy={handleBuy} products={prodcucts} count={count} />
      <h3 className="caption">Внести деньги:</h3>
      <div className="mainPage">
        {denomination.map((item) => (
          <Currency item={item} addNominal={addNominal} />
        ))}
      </div>
      <div className="count">
        <p>Ваш баланс:</p>
        <input value={count}></input>
      </div>
      <button className="button" onClick={() => returnChange(count)}>Выдать сдачу</button>
      <p className="change">Выдали сдачу:{nomianlChange?.map((item) => (
        <p>{item[0]}руб - {item[1]}шт</p>
      ))}
      {productChange?.map((item) => (
        <p>{item[0]} - {item[1]}шт</p>
      ))}
      </p>
    </div>
  );
}

export default App;

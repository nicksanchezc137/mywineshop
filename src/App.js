import "./App.css";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Cart from "./components/Cart"

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    //fetch products
    axios
      .get("https://storage.googleapis.com/wineshop-assets/wine-shop.json")
      .then((res) => {
        console.log("🚀 ~ file: App.js ~ line 10 ~ axios.get ~ res", res);
        if (res.status === 200) {
          setItems(res.data);
        }
      });
  }, []);
  function renderItems() {
    return items.map((item) => {
      return (
        <Item
          key={item.no}
          case_cost={item.cost.case}
          bottle_cost={item.cost.bottle}
          name={item.name}
        />
      );
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Wine Shop</h1>
        <span className="link_text">wineshop.com</span>
      </header>
      <section className="top_section">
        <Filter/>
        <Cart/>
      </section>

      <div className="items_grid">{renderItems()}</div>
    </div>
  );
}

export default App;

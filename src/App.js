import "./App.css";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [filtered_items, setFilteredItems] = useState([]);
  const [cart_items, setCartItems] = useState([]);

  useEffect(() => {
    //fetch products
    axios
      .get("https://storage.googleapis.com/wineshop-assets/wine-shop.json")
      .then((res) => {
        console.log("🚀 ~ file: App.js ~ line 10 ~ axios.get ~ res", res);
        if (res.status === 200) {
          setItems(res.data);
          setFilteredItems(res.data)
        }
      });
  }, []);
  function renderItems() {
    return filtered_items.map((item) => {
      return (
        <Item
          key={item.no}
          case_cost={item.cost.case}
          bottle_cost={item.cost.bottle}
          name={item.name}
          showDetails={() => {
            alert(item.details);
          }}
          addItem={(case_quantity, bottle_quantity) => {
            console.log(
              "🚀 ~ file: App.js ~ line 58 ~ returnitems.map ~ case_quantity",
              case_quantity,
              bottle_quantity
            );

            console.log(
              "🚀 ~ file: App.js ~ line 43 ~ returnitems.map ~ item.cost.bottle",
              item.cost.bottle,
              item.cost.case
            );
            if (bottle_quantity > 0) {
              addToCart(item, "Bottle", Number(bottle_quantity), item.cost.bottle);
            }
            if (case_quantity > 0) {
              addToCart(item, "Case", Number(case_quantity), item.cost.case);
            }
          }}
        />
      );
    });
  }
  function addToCart(item, type, qty, cost) {
    console.log("🚀 ~ file: App.js ~ line 55 ~ addToCart ~ cost", cost);
    console.log("🚀 ~ file: App.js ~ line 55 ~ addToCart ~ qty", qty);
    console.log("🚀 ~ file: App.js ~ line 55 ~ addToCart ~ item", item);
    if (
      cart_items.filter(
        (cart_item) => cart_item.no + type == item.no + type
      ).length
    ) {
      console.log("I exist in cart---");
      let $cart_items = cart_items.map((cart_item) => {
        let cart_item_clone = JSON.parse(JSON.stringify(cart_item));
        if (cart_item.no == item.no) {
          console.log("gotten to the golden one----");
          cart_item_clone.qty = cart_item.qty + qty;
          cart_item_clone.total = cart_item.qty * cart_item.cost;
          console.log("This is me--", cart_item_clone);

          return cart_item_clone;
        } else {
          return cart_item;
        }
      });
      console.log("cart_items is ",$cart_items)
       setCartItems($cart_items)
    } else {
      let $cart_item ={
        no: item.no,
        name: item.name,
        type,
        qty: qty,
        cost: cost,
        total: cost * qty,
      };
      
      setCartItems([...cart_items,$cart_item]);
      setTimeout(() => {
        console.log("cart_items is ",[...cart_items,$cart_item])
      }, 1000);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Wine Shop</h1>
        <span className="link_text">wineshop.com</span>
      </header>
      <section className="top_section">
        <Filter
          onShowAll={() => {
            setFilteredItems(items);
          }}
          onShowFiltered={() => {
            setFilteredItems(items);
          }}
          onShowWhite={() =>setFilteredItems(items.filter((item)=>item.tags.includes("white")))}
          onShowRed={() => setFilteredItems(items.filter((item)=>item.tags.includes("red")))}
          onShowSparkling={() => setFilteredItems(items.filter((item)=>item.tags.includes("sparkling")))}
          onOrderByPrice={() => {
            let ordered_array  = JSON.parse(JSON.stringify(filtered_items.sort((a, b) => (a.cost.bottle > b.cost.bottle) ? 1 : -1)))
            setFilteredItems(ordered_array)
          }}
          onOrderByVintage={() => setFilteredItems(items.filter((item)=>item.tags.includes("vintage")))}
        />
        <Cart 
          cart_items= {cart_items}
          clearCart={()=>{
            setCartItems([]);
            alert("Cart items cleared")
          }}
        />
      </section>

      <div className="items_grid">{renderItems()}</div>
    </div>
  );
}

export default App;

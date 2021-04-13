import "../App.css";

function Cart() {
  return <div className="cart">
      <label className="delivery_info">Delivery Info</label>
      <h1 className="cart_quantity">36 Bottles</h1>

      <div className="cart_items">
          <label>36 x 2013</label>
          <label className="price_text">Ksh 432.56</label>
      </div>

      
      <div className="cart_btns">
      <button className="light_btn">Empty Cart</button>
      <button className="dark_btn">Checkout</button>
      </div>

  </div>;
}

export default Cart;

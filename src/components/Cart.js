import "../App.css";

function Cart(props) {
  function renderCartItems(cart_items) {
    return cart_items.map((cart_item) => {
      return (
        <div className="cart_items">
          <label>
            {cart_item.qty} x {cart_item.cost}
          </label>
         
        </div>
      );
    });
  }
  function getTotal(){
    return props.cart_items.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0);
  }
  return (
    <>
    <div className="cart_desktop">
      <label className="delivery_info">Delivery Info</label>
      <h1 className="cart_quantity">{props.cart_items.length} Items</h1>
       <div className="list_items">
      {renderCartItems(props.cart_items)}
      </div>

      <label className="price_text_all">Ksh {getTotal().toFixed(2)}</label>

      <div className="cart_btns">
        <button onClick={props.clearCart} className="light_btn">Empty Cart</button>
        <button className="dark_btn">Checkout</button>
      </div>
    </div>

    <div className="cart_mobile">

      <div className="cart_mobile_details">
      <h1 className="cart_quantity_mobile">{props.cart_items.length} Items</h1>
      <label className="price_text_all_mobile">Ksh {getTotal().toFixed(2)}</label>
      </div>

      <div className="cart_mobile_btns">
      <button onClick={props.clearCart} className="light_btn">Empty Cart</button>
        <button className="dark_btn">Checkout</button>
      </div>

   
    </div>


    </>
  );
}

export default Cart;

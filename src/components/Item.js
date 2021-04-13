import "../App.css";
import bottle from "../images/wine_bottle.png";

function Item(props) {
  return (
    <div className="item">
      <img className="thumbnail" src={bottle} />
      <div>
        <span className="item_name">{props.name}</span>
        <div className="item_details_container">
          <div className="left_single_item">
            <div className="price_container">
              <span className="bottle_text">Bottle</span>
              <span className="price_text">{props.bottle_cost}</span>
            </div>
            <div className="input_container">
              <input type="number" className="qty_input" min="0" max="100"/>
              <label class="qty_label">QTY</label>
            </div>
            <button className="details_btn">Details</button>
          </div>

          <div className="right_single_item">
            <div className="price_container">
              <span className="bottle_text">Case</span>
              <span className="price_text">{props.case_cost}</span>
            </div>
            <div className="input_container">
              <input type="number" className="qty_input" min="0" max="100"/>
              <label class="qty_label">QTY</label>
            </div>
            <button className="add_to_cart_btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
